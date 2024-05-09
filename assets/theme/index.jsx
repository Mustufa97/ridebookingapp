import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const index = StyleSheet.create({
    basic_container: {
        width: width,
     
    },
    // main_heading: {
    //     fontSize: 25,
    //     color: "#00a200",
    //     textTransform: "capitalize",
    //     fontWeight: "600"
    // },
    // main_headings: {
    //     fontSize: 25,
    //     color: "#00a200",
    
    //     fontWeight: "600"
    // },
    // sub_heading: {
    //     fontSize: 18,
    //     color: "#00a200",
    //     textTransform: "capitalize"
    // },
    // basic_button: {
    //     backgroundColor: "#00a200"
    // },
    // basic_button_text: {
    //     color: "white",
    //     textTransform: "capitalize",
    //     textAlign: "center"
    // },
    // simple_txt: {
    //     fontSize: 18,
    //     fontWeight: "600",
    //     textAlign: "center",
    //     color: "#808080",
    // },

    // flex_space_between: {
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     alignItems: "center"
    // },
    // HEADINGS COLORS =================================
    Heading_color: { color: "#309fed", },
    text_color: { color: "#808080" },

    // BG COLORS =================================
    bg_color: { backgroundColor: "#309fed"},
    // BG COLORS =================================
    button_color: { backgroundColor: "#B865FA", },
    button_text_color: { backgroundColor: "#309fed" },

    // FONTS COLORS =================================
    Light_gray_color_f: { color: "#CCCCCC" },

    // BORDERS ========================
    borderBot_gray:{
        borderBottomColor: "#CCCCCC",
        borderBottomWidth: 1,
    },
    orenge_color_f: { color: "#ff5800" }, 
    Light_gray_color_f: { color: "#CCCCCC" },
    black_color_f: { color: "#333333" }, 

    //icon Color==========
    icon_Color: { color: "#0038A4" },  
    //Font Family ====================
    Font_family: { fontFamily:"Poppins-Regular"},
    Font_family_Bold: { fontFamily:"Poppins-Bold"},

    //Border Color =================
    gray_border_Color: { borderColor: "#808080" },
    ligth_gray_border_Color: { borderColor: "#CCCCCC" },
    green_border_Color: { borderColor: "#00a200" },

    outline_color: {
        borderWidth: 2,
        borderColor: "#00a200"
    }
});

export default index;
