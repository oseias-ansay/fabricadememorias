import {createNativeStackNavigator,NativeStackNavigationProp} from "@react-navigation/native-stack"
import { Home } from "@screens/Home";
import { Ensaios } from "@screens/Ensaios";
import { Eventos } from "@screens/Eventos";
import { SignIn } from "@screens/SignIn";
import { Viagens } from "@screens/Viagens";    

type AppRoutes = {
    home: undefined;
    ensaios: undefined;
    eventos: undefined;
    viagens: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const {Navigator, Screen} = createNativeStackNavigator<AppRoutes>();
export function AppRoutes() {
return (
    <Navigator screenOptions={{headerShown: false}}>
        <Screen name="home" component={Home} />
        <Screen name="ensaios" component={Ensaios} />
        <Screen name="eventos" component={Eventos} />
        <Screen name="viagens" component={Viagens} />       
    </Navigator>
);  
}