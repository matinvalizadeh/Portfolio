import { create } from "zustand" ; 
import allTexts from "../Texts/AllTexts" ;  

type LanguageStore = {
    language: ("English" | "Persian"), 
    direction: ("rtl" | "ltr"),
    oppositeDirection: ("rtl" | "ltr")
    websiteTexts: any, 
    sign: 1 | (-1) , //animation movement direction
}

export const useLanguageStore = create<LanguageStore>(() => ({
    language: "English", 
    direction: "ltr", 
    oppositeDirection: "rtl", 
    websiteTexts: allTexts["English"], 
    sign: 1, 

}) ) ; 