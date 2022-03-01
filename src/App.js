import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PareComp from './components/PareComp';
import RefsDemo from './components/RefsDemo';
import Input from './components/Input';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
//import {Greet} from './components/Greet';

function App() {
  return (
    <div className="App">
      {/* <UserProvider value='Vinod'>
         <ComponentC />
      </UserProvider> */}
      
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <PareComp /> */}
      <PareComp />
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* 
      <EventBind />
      <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
       {/* <Greet name='Function Component 1' heroName='Func1'>
        <p>This is children props</p>
      </Greet> */}
      {/* <Greet name='Function Component 2' heroName='Func2'>
        <button className='btn btn-info'>Action</button>
      </Greet> */}
      {/* <Greet name='Function Component 3' heroName='Func3'/> */}

      {/* <Welcome name='Class Component 1' heroName='Func1'/>  */}
      {/* <Welcome name='Class Component 2' heroName='Func2'/>  */}
      {/* <Welcome name='Class Component 3' heroName='Func3'/>  */}

     {/* <Greet name='Diana' heroName='Wonder Women'/>*/}
     {/* <Welcome name='Vinod' heroName='Matur'/>  */}
       


      {/*<Hello /> */}
    </div>
  );
}

export default App;
