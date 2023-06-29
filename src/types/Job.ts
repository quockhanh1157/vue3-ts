interface Job {
    title:string,
    location:string,
    salary:number,
    id:string
}

type OrderTerm = "location" | "salary" | "title"

export {Job,OrderTerm}