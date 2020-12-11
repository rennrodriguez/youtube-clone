import React from 'react'
import SampleComments from './SampleComments'




function CommentsMain() {

    // const [display, setDisplay] = useState( [] );

    // useEffect(() => {
    //     axios
    //     .get(`https://jsonplaceholder.typicode.com/albums`)
    //     .then(result => setDisplay(result.data))
    //     console.log(setDisplay)
    //     }, [])
 
   
    return (
        <div className = "comments-main">
            <SampleComments comment = "Yung base. Isang one hit na lang. May Minions, may Minions. Akala nila champion na, it's a praaank 😂😂." image = "https://yt3.ggpht.com/ytc/AAUvwnjdWfQUQAQV4b-zokfw5BUlTEG9BUf238NSM4o-gA=s88-c-k-c0x00ffffff-no-rj" date = "3 months" channelName = "Because" />
            
            <SampleComments comment = "Pusa woof woof? tas di lasing pero naka inom tas lord 2 minutes ahahahah kaya favorite ko aura ph eh dahil hindi lang nakakatawa pero humble" image = "https://yt3.ggpht.com/ytc/AAUvwngGkL69lU4PuWdzhk-jR1Nd5UuWPutMUya88OiI1Q=s88-c-k-c0x00ffffff-no-rj" date = "2 days ago" channelName = "GeorgéNothim" />

            <SampleComments comment = "isang baguhang nag sisimula pa lamang, sana masuportahan nyo po ako, subscribe naman po kayo, maraming salamat po. :)" image = "https://yt3.ggpht.com/ytc/AAUvwnhpu9rfNMG-tC5hn4cZokoXj70MMren3CVXpiiUBA=s88-c-k-c0x00ffffff-no-rj" date = "3 months" channelName = "Crimskie TV" />

            <SampleComments comment = "0:52 Lord panga HAHAHAHAHA" image = "https://yt3.ggpht.com/ytc/AAUvwni2uzV4hXe6_HPjVHLL6BiyLYqGQO_pkB-NHkca=s88-c-k-c0x00ffffff-no-rj" date = "3 months" channelName = "i stan jendeukierubyjane" />

            <SampleComments comment = "Kay rafflesia lang ata yung pusang tumatahol amp" image = "https://yt3.ggpht.com/ytc/AAUvwngXaM0RNvIBbFEbGrMYOxLuTcb_xRBADRTlJAh7rw=s88-c-k-c0x00ffffff-no-rj" date = "3 months" channelName = "Tokyo" />

            <SampleComments comment = "lods penge skin pls lance epic lang 592156659 (10047) pls po" image = "https://yt3.ggpht.com/ytc/AAUvwnjggEyAPrW30ElSFQGDW62YfwwRFAbV_emb2ooUAw=s88-c-k-c0x00ffffff-no-rj" date = "3 months" channelName = "JIMNEST" />
        </div>
    )
}

export default CommentsMain
