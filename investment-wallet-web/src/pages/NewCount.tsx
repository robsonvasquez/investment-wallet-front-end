import { Link } from "react-router-dom";

import Input from "../components/Input";
import Button from "../components/Button";
import LinkGreen from "../components/LinkGreen";

export default function NewCount(){
  return(
    <div className="h-screen flex justify-center items-center">
      <div className="w-96 flex flex-col">
        <h1 className={`text-[#1E5128] text-center text-5xl font-bold mb-8`}>Crie sua conta</h1>
        <div className="flex flex-col justify-center items-center">
          <Input image="email" placeholder="Email"/>
          <Input image="user" placeholder="Nome"/>
          <Input image="lock" type="password" placeholder="Senha"/>
          <Input image="lock" type="password" placeholder="Confirme a senha"/>

          <span className='text-center text-sm font-bold'>
            Ao se registrar, você aceita nossos&nbsp;
            <LinkGreen to='/' text='termos de uso'/>
            e a nossa&nbsp;
            <LinkGreen to='/' text='política de privacidade.'/>  
          </span>
          
          <Button className='mt-5' text='Cadastrar'/>
          
          <LinkGreen to='/login' className="mt-5" text="Voltar ao login."/>
        </div>
      </div>
    </div>
  );
}