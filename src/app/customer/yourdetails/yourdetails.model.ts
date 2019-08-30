export class Details {
    name?: 'string';
    phoneNo?: 'string';
    emailId?: 'string';
    setBasicInfo(name, phoneNo, emailId) {
        this.name = name;
        this.phoneNo = phoneNo;
        this.emailId = emailId;
    }
}
