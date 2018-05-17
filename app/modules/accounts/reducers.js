import { handleActions } from 'redux-actions';
import types from './types';
import { colors } from '../../styles';
import { insert, insertAll, update, remove } from '../../utils/stateHelper';


const createAccount = (props) => {
  const {
    name,
    icon,
    initialBalance = 10,
    initialDate = new Date(),
    color = colors.green,
    isAddButton = false,
  } = props;

  return {
    name, icon, initialBalance, initialDate, color, isAddButton,
  };
};


//    "accounts": Object {
//        "byId": Object {
//            "0": Object {
//                "color": "#27ae60",
//                  "icon": "credit-card",
//                  "id": "0",
//                  "initialBalance": 0,
//                  "initialDate": 2018-04-17T13:29:18.248Z,
//                  "isAddButton": false,
//                  "name": "Card",
//                },
//            "1": Object {
//                "color": "#27ae60",
//                  "icon": "cash-multiple",
//                  "id": "1",
//                  "initialBalance": 0,
//                  "initialDate": 2018-04-17T13:29:18.248Z,
//                  "isAddButton": false,
//                  "name": "Cash",
//                },
//            "2": Object {
//                "color": "#27ae60",
//                  "icon": "cash-multiple",
//                  "id": "2",
//                  "initialBalance": 0,
//                  "initialDate": 2018-04-17T13:29:18.248Z,
//                  "isAddButton": false,
//                  "name": "Test 1",
//                },
//            "3": Object {
//                "color": "#27ae60",
//                  "icon": "cash-multiple",
//                  "id": "3",
//                  "initialBalance": 0,
//                  "initialDate": 2018-04-17T13:29:18.248Z,
//                  "isAddButton": false,
//                  "name": "Test 2",
//                },
//          },
//        "ids": Array [
//            "3",
//            "2",
//            "1",
//            "0",
//          ],
//      },


const defaultAccounts = [
  createAccount({ name: 'Card', icon: 'credit-card', color: colors.orange }),
  createAccount({ name: 'Cash', icon: 'cash-multiple', color: colors.blue }),
  createAccount({ name: 'Test 1', icon: 'cash-multiple', color: colors.red }),
  createAccount({ name: 'Test 2', icon: 'cash-multiple' }),
];

const initialState = insertAll({}, defaultAccounts);

const accountsReducer = handleActions({
  [types.CREATE_ACCOUNT]: (state, { payload }) => insert(state, createAccount({
    ...payload,
    balance: payload.initialBalance,
  })),
  [types.UPDATE_ACCOUNT]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_ACCOUNT]: (state, { payload }) => remove(state, payload),
}, initialState);

export default accountsReducer;
