import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardsBlock:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginVertical:5,
    },
    cards:{
      padding:10,
      height:115,
      width:115,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:5,
    },
    bgRed:{
      backgroundColor:'#EF5350'
    },
    bgGreen:{
      backgroundColor:'#50DBB4'
    },
    bgBlue:{
      backgroundColor:'#5DA3FA'
    },
    textBox:{
      fontSize:25,
      fontWeight: 'bold',
      letterSpacing:1,
    },
    cardsAlt:{
      backgroundColor:'#CAD5E2'
    },
    trendingPlacesBlock:{
      // marginVertical:5,
      // borderRadius:5,
      backgroundColor:'#FFFFFF',
      width:350,
      height:360,
      marginVertical:12,
      marginHorizontal:10,
      elevation:3,
      shadowOffset:{
        width:1,
        height:1
      },
      borderRadius:5

    },
    centerBox:{
      alignItems:'center',
    },
    ecards:{
      marginRight:5,
      marginLeft:5
    },
    cardTitle:{
      fontSize:22,
      marginBottom:4,
      fontWeight:"bold",
    },
    cardDescription:{
      color:'#242B2E',
      fontSize:15,
      marginBottom:12,
      marginTop:6,
      flexShrink:1,
    },
    headingTextBlog: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    cardBlog: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCardBlog: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainerBlog: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTextBlog: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImageBlog: {
        height: 190
    },
    bodyContainerBlog: {
        padding: 10
    },
    footerContainerBlog: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinksBlog: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6  
    },
    headingTextContact:{
      fontSize: 24,
      fontWeight: 'bold',
      letterSpacing:1
    },
    containerContact:{
      paddingHorizontal:16,
      marginBottom:4
    },
    userCard:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      marginBottom:3,
      backgroundColor: '#8D3DAf',
      borderRadius: 10,
      padding:8
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:60/2,
        marginRight:14
    },
    userName:{
      fontSize:16,
      fontWeight:'600',
      color:'#FFF'
    },
    userStatus:{
      fontSize: 12,
      color:'#FFF'
    },

  })

  export default styles