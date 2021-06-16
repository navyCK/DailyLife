class DailyLife:
    def __init__(self, habit, activity, work):
        self.habit = habit
        self.activity = activity
        self.work = work
    
    def getHabit(self):
        print("저의 습관은", self.habit, "입니다.")     # 방법 1
    
    def getActivity(self):
        print(f"저의 활동은 {self.activity}입니다.")    # 방법 2

    def getWork(self):
        print(f"제가 하는 일은 {self.work}입니다.")

daily_life_joo = DailyLife('머리 만지기', '축구', '앱 만들기')
daily_life_joo.getHabit()
daily_life_joo.getActivity()
daily_life_joo.getWork()

# 참고 : https://rfriend.tistory.com/516