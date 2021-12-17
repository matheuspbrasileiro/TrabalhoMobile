import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, Text, View } from "react-native";

import MyTextInput from '../../components/mytext';
import { snService } from '../../services/sn.service';
import { TypeRoutes } from '../../routes';

import styles from './styles';
import { Usuario } from '../../entities';

export default function SignUp() {

    const navigation = useNavigation<NavigationProp<TypeRoutes>>();

    React.useEffect(() => {
        navigation.setOptions({ title: 'Novo Usuário' });
    }, []);

    const [name, setNome] = React.useState('');
    const [address, setEndereco] = React.useState('');
    const [age, setIdade] = React.useState(0);
    const [email, setEmail] = React.useState('');
    const [userPassword, setUsuarioSenha] = React.useState('');
    const [confirmar, setConfirmar] = React.useState('');
    

    async function save() {
        if (!address || !age || !name || !email || !userPassword || !confirmar) {
            alert('Todos os campos são obrigatórios!');
            return;
        }
        if (userPassword !== confirmar) {
            alert('A senha não confere!');
            return;
        }
        
        const usuario: Usuario = {
            address,
            age,
            email: email.toLowerCase(),
            name,
            userPassword
        };
        
        const savedUser = await snService.createUser(usuario);
        try {
            if (savedUser != null){
                navigation.goBack();     
            }else{
                alert('Usuário já cadastrado!');
            }
            
        } catch (error) {
            console.error('Erro ao criar um novo usuário: ', error);
            alert('Ocorreu um erro não esperado!');
        }
        
    }

    async function textoParaNumero(params:string) {
      setIdade(Number(params))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastrar</Text>

            <MyTextInput title="Endereço:" value={address} onChangeText={setEndereco} />

            <MyTextInput title="Idade:" value={age.toString()} onChangeText={textoParaNumero} />

            <MyTextInput title="Nome:" value={name} onChangeText={setNome} />
            
            <MyTextInput title="Email:" value={email} onChangeText={setEmail} />

            <MyTextInput title="Senha:" value={userPassword} onChangeText={setUsuarioSenha} secureTextEntry />
            <MyTextInput title="Confirm Senha:" value={confirmar} onChangeText={setConfirmar} secureTextEntry />

            <Button title="Cadastrar" onPress={save} />
        </View>
    );
}