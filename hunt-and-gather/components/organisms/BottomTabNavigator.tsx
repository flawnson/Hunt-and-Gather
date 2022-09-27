import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import FeedPage from "../../pages/FeedPage";
import SignupPage from "../../pages/SignupPage";
import TabBar from "../molecules/TabBar";

const Tab = createBottomTabNavigator();

export default function () {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
            }}
            tabBar={props => <TabBar {...props} />}
        >
            <Tab.Screen
                name="Feed"
                component={FeedPage}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={SignupPage}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="settings" size={size} color={color} />
                    ),
                    tabBarBadge: 3,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={SignupPage}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
