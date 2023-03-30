export class employee {
  name: string;
  contact: number;
  email: string;
  department: string;
  role: string;
  active: boolean;
  updated: string;
  noticePeriod: number;
  currentCTC : number;
  ExpectedCTC : number;
  sscBoardYear : number;
  sscBoardName : string;
  sscBoardPercentage : number;
  hscBoardYear : number;
  hscBoardName : string;
  hscBoardPercentage : number ;
  graduationdYear: number;
  graduationName: string;
  graduationPercentage: number;
  constructor(
    name: string,
    contact: number,
    email: string,
    department: string,
    role: string,
    active: boolean,
    updated: string,
    noticePeriod: number,
    currentCTC : number,
    ExpectedCTC: number,
    sscBoardYear : number,
    sscBoardName : string,
    sscBoardPercentage : number,
    hscBoardYear : number,
    hscBoardName : string,
    hscBoardPercentage : number,
    graduationdYear: number,
    graduationName : string,
    graduationPercentage : number,
  ) {
    (this.name = name),
      (this.contact = contact),
      (this.email = email),
      (this.department = department),
      (this.role = role),
      (this.active = active),
      (this.updated = updated),
      (this.noticePeriod = noticePeriod),
      (this.currentCTC = currentCTC),
      (this.ExpectedCTC = ExpectedCTC),
      (this.sscBoardYear = sscBoardYear),
      (this.sscBoardName = sscBoardName),
      (this.sscBoardPercentage = sscBoardPercentage),
      (this.hscBoardYear = hscBoardYear),
      (this.hscBoardName = hscBoardName),
      (this.hscBoardPercentage = hscBoardPercentage),
      (this.graduationdYear = graduationdYear),
      (this.graduationName= graduationName),
      (this.graduationPercentage = graduationPercentage);
  }
}
