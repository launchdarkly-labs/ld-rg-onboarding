import { v4 as uuidv4 } from 'uuid';


const serverflag =  async (ldclient: any, key: string, context: any, defaultvalue: any) => {
 const flag = await ldclient.variation(key, context, defaultvalue)
 return flag
}

export default serverflag