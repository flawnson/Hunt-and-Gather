/* React Navigation types used throughout app*/
export type RootStackParamList = {
    LoginPage: undefined
    SignupPage: undefined
    FeedPage: undefined
};


export type FoodCardProps = {
    foodId: string,
    restaurantName: string,
    dishName: string,
    imgPath: string,
    price: string,
    location: string,
    time: string
}
