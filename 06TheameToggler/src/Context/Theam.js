import React,{useContext,createContext} from "react";

export const TheamContext = createContext({
    theamMode:"light",
    darkTheam: ()=>{},
    lightTheam: ()=>{},
})

export const TheamProvider = TheamContext.Provider

export default function useTheam(){
    return useContext(TheamContext)
}
