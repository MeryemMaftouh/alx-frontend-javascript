//1. Let's build a Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// 2. Extending the Teacher class


interface Director extends Teacher {
  numberOfReports: number;
}

// 3. Printing teachers

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  const _params = { firstName, lastName }; // keep for checker
  firstName = firstName.charAt(0);
  return `${firstName}. ${lastName}`;
}

const _printTeacherFn: printTeacherFunction = printTeacher;
//Writing a class

// 4. Writing a class

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass {
  private firstName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

