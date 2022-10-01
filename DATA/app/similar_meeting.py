import models, schemas
from database import engine
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
import main

import time
import json

def get_member_sim_meeting(memberId, booklog, review, meeting):
    # 평점 DF 만들기
    rating = pd.merge(booklog, review, left_on='id', right_on='booklog_id')
    rating = rating[['member_id', 'score', 'book_id']]
    ratings = pd.pivot_table(rating, index='member_id', columns='book_id', values='score')
    ratings = ratings.fillna(0)

    # member간 유사도 구하기
    member_sim = cosine_similarity(ratings, ratings)
    member_sim_df = pd.DataFrame(data = member_sim, index=ratings.index, columns=ratings.index)
    #         print(member_sim_df[member_id].sort_values(ascending=False)[1:])
    member_sim = []

    # meeting에 참여한 member들 유사도 평균 구하기
    for i in meeting.index:
        total_sim = 0
        member_num = 0
        for j in meeting['meetingMembers'][i]:
            if j != memberId:
                if member_sim_df[memberId].sort_values(ascending=False)[1:][j] > 0:
                    member_num += 1
                    total_sim += member_sim_df[memberId].sort_values(ascending=False)[1:][j]
        if member_num > 0 :
            member_sim.append(total_sim/member_num)
        else:
            member_sim.append(0)

    meeting['member_sim'] = member_sim
    member_sim_meeting = meeting.sort_values('member_sim', ascending=False)
    member_sim_meeting = member_sim_meeting[member_sim_meeting['member_sim'] > 0]
    response = dict()
    response['memberSimMeeting'] = json.loads(member_sim_meeting.to_json(orient='records', force_ascii=False, indent=4))
    
    return response