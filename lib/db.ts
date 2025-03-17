import clientPromise from './mongodb';
import { ObjectId } from 'mongodb';

export interface Student {
  _id?: ObjectId;
  name: string;
  email: string;
  grade: string;
  courses: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Course {
  _id?: ObjectId;
  name: string;
  description: string;
  instructor: string;
  students: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Grade {
  _id?: ObjectId;
  studentId: string;
  courseId: string;
  score: number;
  semester: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Student operations
export async function getStudents() {
  const client = await clientPromise;
  const db = client.db("student-management");
  return db.collection("students").find({}).toArray();
}

export async function getStudent(id: string) {
  const client = await clientPromise;
  const db = client.db("student-management");
  return db.collection("students").findOne({ _id: new ObjectId(id) });
}

export async function createStudent(student: Omit<Student, '_id'>) {
  const client = await clientPromise;
  const db = client.db("student-management");
  return db.collection("students").insertOne({
    ...student,
    createdAt: new Date(),
    updatedAt: new Date()
  });
}

export async function updateStudent(id: string, student: Partial<Student>) {
  const client = await clientPromise;
  const db = client.db("student-management");
  return db.collection("students").updateOne(
    { _id: new ObjectId(id) },
    { 
      $set: {
        ...student,
        updatedAt: new Date()
      }
    }
  );
}

export async function deleteStudent(id: string) {
  const client = await clientPromise;
  const db = client.db("student-management");
  return db.collection("students").deleteOne({ _id: new ObjectId(id) });
}

// Course operations
export async function getCourses() {
  const client = await clientPromise;
  const db = client.db("student-management");
  return db.collection("courses").find({}).toArray();
}

export async function getCourse(id: string) {
  const client = await clientPromise;
  const db = client.db("student-management");
  return db.collection("courses").findOne({ _id: new ObjectId(id) });
}

export async function createCourse(course: Omit<Course, '_id'>) {
  const client = await clientPromise;
  const db = client.db("student-management");
  return db.collection("courses").insertOne({
    ...course,
    createdAt: new Date(),
    updatedAt: new Date()
  });
}

export async function updateCourse(id: string, course: Partial<Course>) {
  const client = await clientPromise;
  const db = client.db("student-management");
  return db.collection("courses").updateOne(
    { _id: new ObjectId(id) },
    { 
      $set: {
        ...course,
        updatedAt: new Date()
      }
    }
  );
}

export async function deleteCourse(id: string) {
  const client = await clientPromise;
  const db = client.db("student-management");
  return db.collection("courses").deleteOne({ _id: new ObjectId(id) });
}

// Grade operations
export async function getGrades() {
  const client = await clientPromise;
  const db = client.db("student-management");
  return db.collection("grades").find({}).toArray();
}

export async function getGrade(id: string) {
  const client = await clientPromise;
  const db = client.db("student-management");
  return db.collection("grades").findOne({ _id: new ObjectId(id) });
}

export async function createGrade(grade: Omit<Grade, '_id'>) {
  const client = await clientPromise;
  const db = client.db("student-management");
  return db.collection("grades").insertOne({
    ...grade,
    createdAt: new Date(),
    updatedAt: new Date()
  });
}

export async function updateGrade(id: string, grade: Partial<Grade>) {
  const client = await clientPromise;
  const db = client.db("student-management");
  return db.collection("grades").updateOne(
    { _id: new ObjectId(id) },
    { 
      $set: {
        ...grade,
        updatedAt: new Date()
      }
    }
  );
}

export async function deleteGrade(id: string) {
  const client = await clientPromise;
  const db = client.db("student-management");
  return db.collection("grades").deleteOne({ _id: new ObjectId(id) });
} 