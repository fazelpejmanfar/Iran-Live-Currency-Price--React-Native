import { useState, useEffect, useCallback } from 'react';
import { Button, StyleSheet, Text, View, ImageBackground, Image, ActivityIndicator, SafeAreaView, ScrollView, RefreshControl, StatusBar  } from 'react-native';
import List from './components/List';
import Persiandate from "persian-date";


const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};


export default function App() {

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const bg = { uri: "https://www.fonewalls.com/wp-content/uploads/2019/10/Gradient-Background-Wallpaper-003.jpg" };


  const [usdt, setusdt] = useState(0);

  const TodayDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    console.log("Today is:", today);
    return today;
    setNewDate(today);
  };

  const PerisaDate = () => {
    let today = new Persiandate();
    let dd = today.toLocale("en").format("DD");
    let mm = today.toLocale("en").format("MM");
    let yyyy = today.toLocale("en").format("YYYY");
    today = yyyy + "-" + mm + "-" + dd;
   return today;
  };

  const [fulldata, setfulldata] = useState({
    AED: 3.673497,
    AFN: 87.855784,
    ALL: 114.16937,
    AMD: 406.200775,
    ANG: 1.804831,
    AOA: 426.747069,
    ARS: 125.950769,
    AUD: 1.455461,
    AWG: 1.797774,
    AZN: 1.699951,
    BAM: 1.874434,
    BBD: 1.999623,
    BDT: 93.589531,
    BGN: 1.876443,
    BHD: 0.377402,
    BIF: 2061.2556,
    BMD: 1.000036,
    BND: 1.397745,
    BOB: 6.895513,
    BRL: 5.329388,
    BSD: 1.000402,
    BTC: 0.00005,
    BTN: 79.062415,
    BWP: 12.37971,
    BYN: 3.382899,
    BZD: 2.018818,
    CAD: 1.285641,
    CDF: 2003.047335,
    CHF: 0.961149,
    CLF: 0.03395,
    CLP: 928.543965,
    CNH: 6.690186,
    CNY: 6.691842,
    COP: 4207.654572,
    CRC: 688.112803,
    CUC: 0.999731,
    CUP: 25.743974,
    CVE: 105.701063,
    CZK: 23.68674,
    DJF: 178.289159,
    DKK: 7.123717,
    DOP: 54.880965,
    DZD: 146.268017,
    EGP: 18.855851,
    ERN: 14.997516,
    ETB: 52.237189,
    EUR: 0.958286,
    FJD: 2.204564,
    FKP: 0.826152,
    GBP: 0.826143,
    GEL: 2.939746,
    GGP: 0.826226,
    GHS: 8.052637,
    GIP: 0.826115,
    GMD: 54.078637,
    GNF: 8698.282809,
    GTQ: 7.763991,
    GYD: 209.52836,
    HKD: 7.845883,
    HNL: 24.617466,
    HRK: 7.211143,
    HTG: 115.119008,
    HUF: 384.888893,
    IDR: 14986.087063,
    ILS: 3.504275,
    IMP: 0.825837,
    INR: 79.039803,
    IQD: 1461.665504,
    IRR: 42340.5933,
    ISK: 133.550936,
    JEP: 0.825419,
    JMD: 150.772938,
    JOD: 0.709009,
    JPY: 136.270804,
    KES: 118.124445,
    KGS: 79.485974,
    KHR: 4080.569735,
    KMF: 468.262512,
    KPW: 899.800725,
    KRW: 1299.261698,
    KWD: 0.307199,
    KYD: 0.83535,
    KZT: 467.946498,
    LAK: 15040.541306,
    LBP: 1514.432029,
    LKR: 359.03141,
    LRD: 152.402974,
    LSL: 16.271561,
    LYD: 4.845247,
    MAD: 10.030988,
    MDL: 19.16923,
    MGA: 4088.90038,
    MKD: 59.040626,
    MMK: 1854.238745,
    MNT: 3133.67805,
    MOP: 8.094144,
    MRU: 36.483703,
    MUR: 45.740212,
    MVR: 15.377701,
    MWK: 1027.930085,
    MXN: 20.257257,
    MYR: 4.415924,
    MZN: 63.840735,
    NAD: 16.084727,
    NGN: 420.37343,
    NIO: 35.908199,
    NOK: 9.821465,
    NPR: 126.495739,
    NZD: 1.6083,
    OMR: 0.385625,
    PAB: 0.999949,
    PEN: 3.852575,
    PGK: 3.529473,
    PHP: 55.080166,
    PKR: 204.927561,
    PLN: 4.514491,
    PYG: 6856.059576,
    QAR: 3.659921,
    RON: 4.734905,
    RSD: 112.376708,
    RUB: 55.013644,
    RWF: 1024.983505,
    SAR: 3.75261,
    SBD: 8.143486,
    SCR: 12.832563,
    SDG: 456.39751,
    SEK: 10.314456,
    SGD: 1.395147,
    SHP: 0.825989,
    SLL: 13154.778019,
    SOS: 579.30386,
    SRD: 22.312379,
    SSP: 130.231292,
    STD: 21975.608631,
    STN: 23.479793,
    SVC: 8.763527,
    SYP: 2511.972114,
    SZL: 16.270133,
    THB: 35.671937,
    TJS: 9.890681,
    TMT: 3.502133,
    TND: 3.082145,
    TOP: 2.343982,
    TRY: 16.816673,
    TTD: 6.800249,
    TWD: 29.783451,
    TZS: 2332.48242,
    UAH: 29.592579,
    UGX: 3755.534532,
    USD: 1,
    UYU: 39.476476,
    UZS: 10852.665205,
    VES: 5.468509,
    VND: 23364.756773,
    VUV: 117.202097,
    WST: 2.679001,
    XAF: 628.022019,
    XAG: 0.050185,
    XAU: 0.00188,
    XCD: 2.702174,
    XDR: 0.733183,
    XOF: 628.021477,
    XPD: 0.001259,
    XPF: 114.250203,
    XPT: 0.001846,
    YER: 250.215828,
    ZAR: 16.31319,
    ZMW: 16.600187,
    ZWL: 321.928277,
  });

  const getprice = () => {
    fetch(`https://api.exchangerate.host/latest?base=usd`)
      .then((response) => response.json())
      .then((res) => {
        let prices = res;
        console.log("Currencies", prices.rates);
      });

      fetch(`https://api.nobitex.ir/v2/crypto-prices`)
      .then((response) => response.json())
      .then((res) => {
        let usdtprice = res.params.USDTIRT;
        console.log("USDT", usdtprice.toString().substring(0,5));
        setusdt(usdtprice.toString().substring(0,5) - 500)
      });

      fetch(`https://api.exchangerate.host/latest?base=usd`)
      .then((response) => response.json())
      .then((res) => {
        let fullprices = res.rates;
        console.log("Full Prices:", fullprices);
        setfulldata(fullprices);
      });
    };

    const buyopt = (CUR) => {
      let prc = (usdt / CUR).toString().substring(0,6)
        return prc;
    };

    const sellopt = (CUR) => {
      let tpc = (usdt / CUR).toString().substring(0,6);
      return tpc;
    };

    useEffect(() => {
      getprice();
    }, []);
  

  return (
    <View style={styles.container}>
     <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <StatusBar translucent={true}
              animated={true}
              showHideTransition={"fade"}
              hidden={false}
      />
    <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
      <View style={styles.header}>
        <Text style={styles.headtxt}>
        Live Prices for IRT
        </Text>
        <Text>
        {PerisaDate()} || {TodayDate()} 
        </Text>
      </View>
      <View style={styles.main}>
      <List name={"USDT"} buy={usdt + 500} sell={usdt + 400} img={"https://logotyp.us/files/tether.svg"}/>
      <List name={"USD"} buy={usdt} sell={usdt - 200} img={"https://www.worldometers.info/img/flags/us-flag.gif"}/>
      <List name={"Euro"} buy={buyopt(fulldata.EUR) - 500} sell={(sellopt(fulldata.EUR) - 700).toString().substring(0,5)} img={"data:image/png;base64,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"}/>
      <List name={"GPB"} buy={buyopt(fulldata.GBP) - 600} sell={sellopt(fulldata.GBP) - 800} img={"https://www.worldometers.info/img/flags/uk-flag.gif"}/>
      <List name={"CHF"} buy={buyopt(fulldata.CHF) - 200} sell={sellopt(fulldata.CHF) - 300} img={"https://www.worldometers.info/img/flags/sz-flag.gif"}/>
      <List name={"CAD"} buy={buyopt(fulldata.CAD) - 300} sell={sellopt(fulldata.CAD) - 400} img={"https://www.worldometers.info/img/flags/ca-flag.gif"}/>
      <List name={"AUD"} buy={buyopt(fulldata.AUD) - 300} sell={sellopt(fulldata.AUD) - 400} img={"https://www.worldometers.info/img/flags/as-flag.gif"}/>
      </View>

      <View style={styles.main}>
      <List name={"AED"} buy={(buyopt(fulldata.AED).toString().substring(0,4))} sell={(sellopt(fulldata.AED) - 25).toString().substring(0,4)} img={"https://www.worldometers.info/img/flags/ae-flag.gif"}/>
      <List name={"QAR"} buy={(buyopt(fulldata.QAR)).toString().substring(0,4)} sell={(sellopt(fulldata.QAR) - 30).toString().substring(0,4)} img={"https://www.worldometers.info/img/flags/qa-flag.gif"}/>
      <List name={"BHD"} buy={(buyopt(fulldata.BHD)).toString().substring(0,5)} sell={(sellopt(fulldata.BHD) - 500).toString().substring(0,5)} img={"https://www.worldometers.info/img/flags/ba-flag.gif"}/>
      <List name={"OMR"} buy={(buyopt(fulldata.OMR)).toString().substring(0,5)} sell={(sellopt(fulldata.OMR) - 300).toString().substring(0,5)} img={"https://www.worldometers.info/img/flags/mu-flag.gif"}/>
      <List name={"100 IQD"} buy={buyopt(fulldata.IQD) * 100} sell={sellopt(fulldata.IQD * 100)} img={"https://www.worldometers.info/img/flags/iz-flag.gif"}/>
      <List name={"SAR"} buy={(buyopt(fulldata.SAR)).toString().substring(0,4)} sell={((usdt / fulldata.SAR) - 30).toString().substring(0,4)} img={"https://www.worldometers.info/img/flags/sa-flag.gif"}/>
      <List name={"KWD"} buy={buyopt(fulldata.KWD)} sell={sellopt(fulldata.KWD) - 400} img={"https://www.worldometers.info/img/flags/ku-flag.gif"}/>
      </View>

      <View style={styles.main}>
      <List name={"TRY"} buy={(buyopt(fulldata.TRY)).toString().substring(0,4)} sell={(sellopt(fulldata.TRY) - 20).toString().substring(0,4)} img={"https://www.worldometers.info/img/flags/tu-flag.gif"}/>
      <List name={"CNY"} buy={(buyopt(fulldata.CNY)).toString().substring(0,4)} sell={(sellopt(fulldata.CNY) - 20).toString().substring(0,4)} img={"https://www.worldometers.info/img/flags/ch-flag.gif"}/>
      <List name={"10 JPY"} buy={(buyopt(fulldata.JPY) * 10).toString().substring(0,4)} sell={((sellopt(fulldata.JPY) * 10) - 10).toString().substring(0,4)} img={"https://www.worldometers.info/img/flags/ja-flag.gif"}/>
      <List name={"INR"} buy={(buyopt(fulldata.INR)).toString().substring(0,3)} sell={(sellopt(fulldata.INR) - 2).toString().substring(0,3)} img={"https://www.worldometers.info/img/flags/in-flag.gif"}/>
      <List name={"10 AMD"} buy={(buyopt(fulldata.AMD) * 10).toString().substring(0,3)} sell={((buyopt(fulldata.AMD) * 10) - 5).toString().substring(0,3)} img={"https://www.worldometers.info/img/flags/am-flag.gif"}/>
      <List name={"AFN"} buy={(buyopt(fulldata.AFN)).toString().substring(0,3)} sell={(sellopt(fulldata.AFN) - 3).toString().substring(0,3)} img={"https://www.worldometers.info/img/flags/af-flag.gif"}/>
      <List name={"AZN"} buy={(buyopt(fulldata.AZN)).toString().substring(0,5)} sell={(sellopt(fulldata.AZN) - 100).toString().substring(0,5)} img={"https://www.worldometers.info/img/flags/aj-flag.gif"}/>
      </View>

      <View style={styles.main}>
      <List name={"MYR"} buy={(buyopt(fulldata.MYR).toString().substring(0,4))} sell={(sellopt(fulldata.MYR) - 40).toString().substring(0,4)} img={"https://www.worldometers.info/img/flags/my-flag.gif"}/>
      <List name={"SGD"} buy={(buyopt(fulldata.SGD)).toString().substring(0,5)} sell={(sellopt(fulldata.SGD) - 100).toString().substring(0,5)} img={"https://www.worldometers.info/img/flags/sn-flag.gif"}/>
      <List name={"HKD"} buy={(buyopt(fulldata.HKD)).toString().substring(0,4)} sell={(sellopt(fulldata.HKD) - 30).toString().substring(0,4)} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFkWuipvvx40U-yrDuF49SgalQMmQu6_eFVFs2cYfCVCKmkqzR3XI0PWc7X2-5OUyLP_Y&usqp=CAU"}/>
      <List name={"THB"} buy={(buyopt(fulldata.THB)).toString().substring(0,3)} sell={(sellopt(fulldata.THB) - 5).toString().substring(0,3)} img={"https://www.worldometers.info/img/flags/th-flag.gif"}/>
      <List name={"RUB"} buy={buyopt(fulldata.RUB).toString().substring(0,3)} sell={(sellopt(fulldata.RUB) - 5).toString().substring(0,3)} img={"https://www.worldometers.info/img/flags/rs-flag.gif"}/>
      <List name={"SEK"} buy={buyopt(fulldata.SEK).toString().substring(0,4)} sell={(sellopt(fulldata.SEK) - 15).toString().substring(0,4)} img={"https://www.worldometers.info/img/flags/se-flag.gif"}/>
      <List name={"NOK"} buy={buyopt(fulldata.NOK).toString().substring(0,4)} sell={(sellopt(fulldata.NOK) - 20).toString().substring(0,4)} img={"https://www.worldometers.info/img/flags/no-flag.gif"}/>
      <List name={"DKK"} buy={buyopt(fulldata.DKK).toString().substring(0,4)} sell={(sellopt(fulldata.DKK) - 20).toString().substring(0,4)} img={"https://www.worldometers.info/img/flags/da-flag.gif"}/>
      </View>
 
      </ImageBackground>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: 'red',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  main: {
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
    padding: 20,
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    marginBottom: 20,
    gap: 5,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    width: "100%",
    display: 'flex',
    flexDirection: "column",
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    marginBottom: 35,
    marginTop: 50,
    minHeight: 65,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  headtxt: {
    fontWeight: 'bold',
    //fontSize: "1rem",
    color: "black",
  },
});
