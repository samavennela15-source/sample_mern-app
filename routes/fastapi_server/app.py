from fastapi import FastAPI
from pydantic import BaseModel
class Student (BaseModel):
       stuname:str
       studept:str
       stuusername:str
       stupassword:str
       stuage:int
       stumark:float


app=FastAPI()

@app.get("/getStudents")
def get_students():
    return "Get Students method called"

#localhost:8000/addStudents
@app.post("/addStudent")
def add_student(stu:Student):
    return {"student_details":stu}



#try two more  routes
#/updateStudent=> put & /deletestudent => delete
@app.put("/putStudent")
def add_student():
    return "Add Student method called"
@app.delete("/deleteStudent")
def add_student():
    return "Add Student method called"


@app.get ("/getParticularStudent/{id}")
def getParticularStudent(id:int):
    return {"userid"}

@app.get("/filterdept")
def filterdept(dept:str,mark:int):
    return{"dept":dept,"mark":mark}