export class Details {
    name?: 'string';
    phoneNo?: 'string';
    email?: 'string';
    setBasicInfo(name, phoneNo, email) {
        this.name = name;
        this.phoneNo = phoneNo;
        this.email = email;
    }
}
