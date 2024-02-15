import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { firebase } from "./config";

import Login from "./screens/Login";
import Registration from "./screens/Registration";
import Dashboard from "./screens/Dashboard";
import Header from "./components/Header";

const Stack = createStackNavigator();

function App() {
    const [initilizing, setInitilizing] = useState(true);
    const [user, setUser] = useState();
    function onAuthStateChanged(user) {
        setUser(user);
        if (initilizing) setInitilizing(false);
    }
    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);
    if (initilizing) return null;
    if (!user) {
        return (

            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerTitle: () => <Header name="Smart Attendance System" />,
                        headerStyle: {
                            alignItems: "center",
                            backgroundColor: "purple",
                            height: 100,
                            borderBottomLeftRadius: 50,
                            borderBottomRightRadius: 50,
                            shadowColor: "white",
                            elevation: 25,
                        }

                    }}
                />

                <Stack.Screen
                    name="Registration"
                    component={Registration}
                    options={{
                        headerTitle: () => <Header name="Smart Attendance System" />,
                        headerStyle: {
                            alignItems: "center",
                            backgroundColor: "purple",
                            height: 100,
                            borderBottomLeftRadius: 50,
                            borderBottomRightRadius: 50,
                            shadowColor: "white",
                            elevation: 25,
                        }

                    }}
                />
            </Stack.Navigator>

        );
    }
    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    headerTitle: () => <Header name="Smart Attendance System" />,
                    headerStyle: {
                        backgroundColor: "purple",
                        height: 100,
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        shadowColor: "white",
                        elevation: 25,
                    }

                }}
            />

        </Stack.Navigator>
    );
}

export default () => {
    return (
        <NavigationContainer>
            <App />
        </NavigationContainer>
    );
}