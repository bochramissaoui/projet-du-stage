import { User } from './User.model';
import { BugStatus } from './enum/bug-status';

export class BugReport {

    public description: string;
    public sender: User;
    public title: string;
    public status: BugStatus;
}
