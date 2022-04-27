import {State} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {UsersStateModel} from "@store/models/users.model";

@State<UsersStateModel>({
  name: 'usersState',
  defaults: {
    data: [],
    total: 0,
    selectedUser: undefined,
  },
})
@Injectable()
export class UsersState {

}
