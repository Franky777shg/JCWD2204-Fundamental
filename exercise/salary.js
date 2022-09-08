// class Employee {
//   wagePerHour = 0;
//   overtimeWagePerHour = 0;
//   workingHour = 0;

//   addWorkingHour(n) {
//     if (n <= 0) {
//       throw new Error("Hour must be more than 0");
//     } else {
//       this.workingHour += n;
//     }
//   }

//   calculateSalary() {
//     if (this.workingHour <= 6) {
//       console.log(this.wagePerHour * this.workingHour);
//     } else {
//       console.log(
//         this.wagePerHour * 6 + this.overtimeWagePerHour * (this.workingHour - 6)
//       );
//     }
//   }
// }

// class FulltimeEmployee extends Employee {
//   wagePerHour = 100000;
//   overtimeWagePerHour = 75000;
// }

// class ParttimeEmployee extends Employee {
//   wagePerHour = 50000;
//   overtimeWagePerHour = 30000;
// }

// let fulltimeEmployee1 = new FulltimeEmployee();
// let parttimeEmployee = new ParttimeEmployee();

// fulltimeEmployee1.addWorkingHour(3);
// fulltimeEmployee1.addWorkingHour(4);
// fulltimeEmployee1.calculateSalary();

// parttimeEmployee.addWorkingHour(3);
// parttimeEmployee.addWorkingHour(4);
// parttimeEmployee.calculateSalary();

class Employee {
  wagePerHour;
  overtimeWagePerHour;
  workingHour = 0;

  addWorkingHour(n) {
    if (n <= 0) {
      throw new Error("Input must be more than 0");
    } else {
      this.workingHour += n;
    }
  }

  calculateSalary() {
    // tidak lembur
    if (this.workingHour <= 6) {
      console.log(this.workingHour * this.wagePerHour);
    }
    // kalau lembur
    else {
      console.log(
        6 * this.wagePerHour + this.overtimeWagePerHour * (this.workingHour - 6)
      );
    }
  }
}

class FulltimeEmployee extends Employee {
  wagePerHour = 100000;
  overtimeWagePerHour = 75000;
}

class ParttimeEmployee extends Employee {
  wagePerHour = 50000;
  overtimeWagePerHour = 30000;
}

let fulltimeEmployee1 = new FulltimeEmployee();
// console.log(fulltimeEmployee1);

fulltimeEmployee1.addWorkingHour(3);
fulltimeEmployee1.addWorkingHour(4);
fulltimeEmployee1.calculateSalary();
