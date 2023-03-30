export class employee {
  name: string;
  contact: number;
  email: string;
  department: string;
  role: string;
  active: boolean;
  updated: string;
  constructor(
    name: string,
    contact: number,
    email: string,
    department: string,
    role: string,
    active: boolean,
    updated: string
  ) {
    (this.name = name),
      (this.contact = contact),
      (this.email = email),
      (this.department = department),
      (this.role = role),
      (this.active = active),
      (this.updated = updated);
  }
}
