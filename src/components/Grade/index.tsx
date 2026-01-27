import { ScrollView } from "react-native";
import { Container } from "./styles";   
import { Cards } from "../Cards";

export function Grade() {
    return (    
        <Container> 
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                horizontally scrollable
                <Cards />
                <Cards />
                <Cards />
                <Cards />    
            </ScrollView>
        </Container>    
    );
}