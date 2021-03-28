import RootReducer from '../Reducers/RootReducer'
import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import RootSaga from '../Saga/root'


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    RootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(RootSaga)

export default store;