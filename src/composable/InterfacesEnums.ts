export namespace Todo {
  export interface JSONObj {
    data: [{
      category: string;
      description: string;
      status: status;
    }]
  }

  export enum status {
    Completed = "completed",
    Pending = "pending",
  }

  export interface FormAdd {
    name: string;
    value: string;
  }
}
