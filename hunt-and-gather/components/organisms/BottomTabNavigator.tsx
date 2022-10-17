import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import FeedPage from "../../pages/UserFeedPage";
import SignupPage from "../../pages/UserSignupPage";

const Tab = createBottomTabNavigator();

export default function () {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: '#8b5cf6',
            }}
        >
            <Tab.Screen
                name="Feed"
                component={FeedPage}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }: any) => (
                        <Feather name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={SignupPage}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color, size }: any) => (
                        <Feather name="settings" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={SignupPage}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }: any) => (
                        <Feather name="user" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
