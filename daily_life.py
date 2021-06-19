class DailyLife:
    def __init__(self, time, location, description):
        self.time = time
        self.location = location
        self.description = description
    
    def getTime(self):
        return 'f{self.time}'     
    
    def getLocation(self):
        return 'f{self.location}'         

    def getDescription(self):
        return 'f{self.description}'

    def show(self):
      print(f"{self.time}에 {self.location}에서 {self.description}를 합니다.")
        

for i in range(3):
  arr = ["일", "활동", "습관"]

  time = input("시간 : ")
  location = input("장소 : ")
  description = input("내가 하는 " + arr[i] + " : ")

  daily_life = DailyLife(time, location, description)
  daily_life.show()

# 참고 : https://rfriend.tistory.com/516
