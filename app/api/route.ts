import planets from "@/lib/planets"
import serverflag from "@/utils/ld-server/flaggetter";
import getServerClient from "@/utils/ld-server/serverClient";
import { NextApiRequest, NextApiResponse } from "next"
import { v4 as uuidv4 } from 'uuid';



export async function GET(request: NextApiRequest, response: NextApiResponse) {
    const context = {
        "kind": 'user',
        "key": `Toggle+${uuidv4().slice(0, 3)}`,  
        "name": 'Toggle'
     };
    const t1 = Date.now()
    const client = await getServerClient(process.env.LAUNCHDARKLY_SERVER_KEY!)
    const flag = await serverflag(client, 'planetApi',context, false)
    console.log(flag)
    if (flag === true) {
        await new Promise(resolve => setTimeout(resolve, 100));
        const t2 = Date.now()
        console.log("Speed is: " + (t2 - t1) + "ms")
        const speed = (t2 - t1)
        console.log(speed)
        client.track("Latency", context, null, speed)
        await client.flush()
        const random = Math.random();
        if (random < 0.6) {
            client.track("Error Rate", context)
            await client.flush()
            throw new Error('Random error');
        }
        return Response.json({ planets })
        
    } else {
        await new Promise(resolve => setTimeout(resolve, Math.random() * (250 - 100) + 100));
        const t2 = Date.now()
        console.log("Speed is: " + (t2 - t1) + "ms")
        const speed = (t2 - t1)
        console.log(speed)
        client.track("Latency", context, null, speed)
        await client.flush()
        const random = Math.random();
        // If the random number is less than 0.2, throw an error
        if (random < 0.2) {
            client.track("Error Rate", context)
            await client.flush()
            throw new Error('Random error');
        }
        return Response.json({ planets })
    }

}