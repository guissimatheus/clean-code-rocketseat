/**
 * Desafio: Regras em condicionais
 * Os comentários são as linhas de código originais
 */

const necessaryGradeToBeApproved = 7
const studentGrade = 10

const numberOfAbsensesToFailSchool = 100
const studentNumberOfAbsenses = 109

function checkIfStudentPassedTheSchoolYear() {
  // if (studentGrade < necessaryGradeToBeApproved) {
  //   return { error: true, message: 'Student was not approved because his grade was below the necessary.'}
  // } else {
  //   if(studentNumberOfAbsenses > numberOfAbsensesToFailSchool) {
  //     return { error: true, message: 'Student was not approved because of his absenses'}
  //   } else {
  //     return { error: false, message: 'Student was approved :)'}
  //   }
  // }
  if (studentGrade < necessaryGradeToBeApproved) {
    return { error: true, message: 'Student was not approved because his grade was below the necessary.'}
  }

  if(studentNumberOfAbsenses > numberOfAbsensesToFailSchool) {
    return { error: true, message: 'Student was not approved because of his absenses.'}
  } 
  
  return { error: false, message: 'Student was approved =D'}
}

console.log(checkIfStudentPassedTheSchoolYear())