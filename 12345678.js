// Resouces
let ign_ELM = document.getElementById('player-IGN');
let Ava_ELM = document.getElementById('player-AVAT');
let Ban_ELM = document.getElementById('player-BANN');
let uID_ELM = document.getElementById('player-UID');
let Like_ELM = document.getElementById('player-LIKE');
let CS_KDA = document.getElementById('CSkda');
let CS_Win = document.getElementById('CSwin');
let GIDe = document.getElementById('GID');
let GPPe = document.getElementById('GPP')
let IGG = document.getElementById('IGG');
let GGL = document.getElementById('GGL');
let GCO = document.getElementById('GCO');
const PYVerTitle = Object.getOwnPropertyNames(Player_Info[Player['code']]);
PYVerTitle.sort(function (a, b) { return b - a });
const P_Resources = {
    Ava_IMG: {
        a124: 'http://2.bp.blogspot.com/-wyYC-lDRHz4/X8tDBWy77AI/AAAAAAAAD60/LZpXKLh4VU0aDkgnKMrKVhxDU2mPIAOMwCK4BGAYYCw/s1600/a124.webp',
        adam: 'http://2.bp.blogspot.com/-A1tkeK_2D64/X8tDJsf-gVI/AAAAAAAAD68/eZnbNXvJ27IFKGKDhQGI5AslR-2g8SBfwCK4BGAYYCw/s1600/adam.webp',
        agent: 'http://2.bp.blogspot.com/-uuMROd-nz1o/X8tDUT0TnaI/AAAAAAAAD7E/SgoC5_WxQ4s26-MfjyySaGXSdA4cnOL3gCK4BGAYYCw/s1600/agent.webp',
        alok: 'http://4.bp.blogspot.com/-JkcOPh8H2PU/X8tDa9Rbv9I/AAAAAAAAD7Q/mFwfJUou9uYKNCHo-Y49hEiBHZWR-g4HwCK4BGAYYCw/s1600/alok.webp',
        alvaro: 'http://2.bp.blogspot.com/-t73OVk0BR4k/X8tDeVqrf3I/AAAAAAAAD7Y/cnoEbOQXHpw-wf_rqTtv20tBAlfuxe-RQCK4BGAYYCw/s1600/alvaro.webp',
        andrew: 'http://2.bp.blogspot.com/-rhUJj3fF6l8/X8tDh1-xSuI/AAAAAAAAD7g/965f9KYFo80nPOGS0LhfLKyORJRBOVWugCK4BGAYYCw/s1600/andrew.webp',
        antonio: 'http://3.bp.blogspot.com/-64WvkwGvRBw/X8tDlFEZcRI/AAAAAAAAD7s/y2q6ZBf5R_wYpZQI5rS14Gez05UmFcfJACK4BGAYYCw/s1600/antonio.webp',
        caroline: 'http://4.bp.blogspot.com/-kk_3PDi9OD8/X8tDoo6Eu_I/AAAAAAAAD70/A1Y4zMjPYI4LjUXXpv96aXvOfLt8xB_3wCK4BGAYYCw/s1600/caroline.webp',
        default: 'http://2.bp.blogspot.com/-QXB6Kjg2srY/X8tDsUfHz-I/AAAAAAAAD8A/58ZP7uZoQ8oJCSvQbdLz10zYuPWDgNAFQCK4BGAYYCw/s1600/default.webp',
        eve: 'http://1.bp.blogspot.com/-MLg4KDCoWqw/X8tDyck-45I/AAAAAAAAD8M/X7YAe_sHuCQHQNDU41Vs2sIcYMUfS0VBgCK4BGAYYCw/s1600/eve.webp',
        ford: 'http://1.bp.blogspot.com/-PoaocTHikGM/X8tD2uGNrNI/AAAAAAAAD8Y/ajrcj3FD2nQu-hzuhUnKsWA6pgWtUwf9ACK4BGAYYCw/s1600/ford.webp',
        hayato: 'http://4.bp.blogspot.com/-fR_8PXtq8Q0/X8tD5nLIVPI/AAAAAAAAD8k/Nxfvg3BQkeMPx2U6MX_eOpMD7KLkfY1HwCK4BGAYYCw/s1600/hayato.webp',
        jai: 'http://3.bp.blogspot.com/-0r1uBDFE1co/X8tD_hfvHXI/AAAAAAAAD8s/FA9dxWPAtS4JCNjkn5PddjvHH5XT2JciwCK4BGAYYCw/s1600/jai.webp',
        joseph: 'http://4.bp.blogspot.com/-ArSh9SN9o0s/X8tED1M3N3I/AAAAAAAAD84/fT585-ld180CDEsX5RBHwob1uRCrOAYnACK4BGAYYCw/s1600/joseph.webp',
        jota: 'http://1.bp.blogspot.com/-lZxZcvJoT-0/X8tEJhalbZI/AAAAAAAAD9E/_tQKG8EDDxQKPS0uc302s9Gkb-XhejWmwCK4BGAYYCw/s1600/jota.webp',
        kapella: 'http://3.bp.blogspot.com/-te14nKwieBg/X8tEORkMsnI/AAAAAAAAD9M/RIYixnxaQQMoDCx3TqZ9NZZOFQtO1xTdACK4BGAYYCw/s1600/kapella.webp',
        kelly: 'http://4.bp.blogspot.com/-wOUupScsGi8/X8tESXexFrI/AAAAAAAAD9U/AaqzfnxVEVEOTwCsi8_xfffm9gGnFMZcgCK4BGAYYCw/s1600/kelly.webp',
        kla: 'http://1.bp.blogspot.com/-vJlzJZUnjBQ/X8tEXKRnWsI/AAAAAAAAD9g/vFPRbqarhzc0C8xwBwdK7lY0_wb34JWXwCK4BGAYYCw/s1600/kla.webp',
        maxim: 'http://2.bp.blogspot.com/-g7hsTrbuuRc/X8tEaSEToqI/AAAAAAAAD9o/xZVZf2AkMbs3Ozw58aoHIQ8rnKM9ELAEQCK4BGAYYCw/s1600/maxim.webp',
        miguel: 'http://4.bp.blogspot.com/-rRxy0wZn2h8/X8tEd17r1cI/AAAAAAAAD9w/32wTPldqb6Y7zMQxCP8jjwc_52IrHCwPgCK4BGAYYCw/s1600/miguel.webp',
        misha: 'http://1.bp.blogspot.com/-1UyISWsNKNE/X8tEgsqV1iI/AAAAAAAAD94/7H78yAwDqIwuPCYrUlFXGAW5ebuPdTGuwCK4BGAYYCw/s1600/misha.webp',
        moco: 'http://2.bp.blogspot.com/-i4o4ExaBk9I/X8tEjp6yn4I/AAAAAAAAD-A/TBxERsnmgXwbpjd6BC10WcWi6qLZxHo_wCK4BGAYYCw/s1600/moco.webp',
        nikita: 'http://2.bp.blogspot.com/-IWEUQEC8iNs/X8tEmcn3zaI/AAAAAAAAD-I/GraC-3qGfgY6XfHjt6nXovYizYry8FQ_gCK4BGAYYCw/s1600/nikita.webp',
        olivia: 'http://4.bp.blogspot.com/-uv6CKoKy1OE/X8tEp06nd9I/AAAAAAAAD-U/X_TJ3svDOKIb8-qDEjwFwdl1dhZMuuU5wCK4BGAYYCw/s1600/olivia.webp',
        paloma: 'http://3.bp.blogspot.com/-uWMU6tW-GGk/X8tEthM30JI/AAAAAAAAD-g/SngymWOcKhcq4bre5-nzv2P5ZXFBGfQyACK4BGAYYCw/s1600/paloma.webp',
        rafael: 'http://2.bp.blogspot.com/-T57dljAWxPw/X8tEwuL2r8I/AAAAAAAAD-o/2INSQheD7fwwxniiQS3pAY9IsIJ9ZBUQQCK4BGAYYCw/s1600/rafael.webp',
        shani: 'http://2.bp.blogspot.com/-n-NHFqDnydg/X8tEzgva09I/AAAAAAAAD-0/WKOMPPJPO4IEvwn247PXXYYJyQ-Did4_gCK4BGAYYCw/s1600/shani.webp',
        steffie: 'http://4.bp.blogspot.com/-uOpGbrUacK4/X8tE2SsptlI/AAAAAAAAD-8/zpPnOQkwpu0oZrF1rBN5aSuUDkqmjokdQCK4BGAYYCw/s1600/steffie.webp',
        wukong: 'http://4.bp.blogspot.com/-Tl4PttMouqA/X8tE4jEYq1I/AAAAAAAAD_E/D-5T17vt3Fos_u6Ygpf4exc3lMEuQghewCK4BGAYYCw/s1600/wukong.webp',
    },
    Ban_IMG: {
        default: 'http://4.bp.blogspot.com/-LANqqRFh7T8/X8u4BOKuKrI/AAAAAAAAD_g/qSn0r8eK5LEjCv6UyonlLawrpfLXBRgFQCK4BGAYYCw/s1600/default.webp',

        s1s: '',
        s1g: '',
        s1p: '',
        s1d: '',
        s1h: '',

        s2s: '',
        s2g: '',
        s2p: '',
        s2d: '',
        s2h: '',

        s3s: '',
        s3g: '',
        s3p: '',
        s3d: '',
        s3h: '',

        s4s: '',
        s4g: '',
        s4p: '',
        s4d: '',
        s4h: '',

        s5s: '',
        s5g: '',
        s5p: '',
        s5d: '',
        s5h: '',

        s6s: '',
        s6g: '',
        s6p: '',
        s6d: '',
        s6h: '',

        s7s: '',
        s7g: '',
        s7p: '',
        s7d: '',
        s7h: '',

        s8s: 'http://3.bp.blogspot.com/-b9SoblwAIDk/X8u5i_wG5AI/AAAAAAAAD_8/HBwjC3NpjT89rpe1W8OYU4frBl5RuX6VQCK4BGAYYCw/s1600/s8%2Bs.webp',
        s8g: 'http://4.bp.blogspot.com/-AItu3yBBQyE/X8u5cijYPpI/AAAAAAAAD_s/A8NIgTs81wMGmkO_LsXQPcTzUr2_SzNfgCK4BGAYYCw/s1600/s8%2Bg.webp',
        s8p: 'http://2.bp.blogspot.com/-2jiBat2AkIQ/X8u5gXYPTYI/AAAAAAAAD_0/PMsznf5r42Eaf6x1N24I6EoRtfFfsCSlACK4BGAYYCw/s1600/s8%2Bp.webp',
        s8d: '',
        s8h: '',

        s9s: 'http://2.bp.blogspot.com/-rnU_zEEWcig/X8u5t1ElwWI/AAAAAAAAEAc/PQeNDiR4Pb4RUeOv_sDW2ZpmR1W7y2SzACK4BGAYYCw/s1600/s9%2Bs.webp',
        s9g: 'http://2.bp.blogspot.com/-rUVFSUmXsDY/X8u5o3apxNI/AAAAAAAAEAM/Kjv9wxr5dv4XFYNnLAGU3_QTgOI83hwyACK4BGAYYCw/s1600/s9%2Bg.webp',
        s9p: 'http://3.bp.blogspot.com/-at-_szx54k4/X8u5rmrzVGI/AAAAAAAAEAU/-2HbGirD9kQcRLib0HZEJItR-5WyVlK3ACK4BGAYYCw/s1600/s9%2Bp.webp',
        s9d: 'http://3.bp.blogspot.com/-hyC52SgYKrI/X8u5lgHDk3I/AAAAAAAAEAE/aB4zRJKFHwE9I4bgKk0LlS1XixS1x3_dgCK4BGAYYCw/s1600/s9%2Bd.webp',
        s9h: '',
        
        s10s: 'http://2.bp.blogspot.com/-TA6uXDk2xdg/X8u6CH1UeJI/AAAAAAAAEBM/3O8piWA6SokV17XNNsRpIVaChmOqkWAogCK4BGAYYCw/s1600/s10%2Bs.webp',
        s10g: 'http://2.bp.blogspot.com/-MSAKEovh5W0/X8u57p2qMqI/AAAAAAAAEA4/XDbNVt6mSPQBmh6Ujt2fNZreJmdldxogQCK4BGAYYCw/s1600/s10%2Bg.webp',
        s10p: 'http://4.bp.blogspot.com/-hoCaB9TMtcI/X8u5-UPdZ4I/AAAAAAAAEBE/HO0ovBg3cLwT2mbLc_xSvkQENCFR5IgVACK4BGAYYCw/s1600/s10%2Bp.webp',
        s10d: 'http://2.bp.blogspot.com/-YKYB7ijpklI/X8u51T531qI/AAAAAAAAEAs/GfZbeEAq8CQoLAvQq1jOWQpzO2ay8FBJQCK4BGAYYCw/s1600/s10%2Bd.webp',
        s10h: '',

        s11s: 'http://1.bp.blogspot.com/-0AP8O6xR0sw/X8u6MVFCrQI/AAAAAAAAEBw/_QnfmfLq-8glcxqYZ466TKPKSTDthkvxQCK4BGAYYCw/s1600/s11%2Bs.webp',
        s11g: 'http://3.bp.blogspot.com/-e5KP3mNYH7o/X8u6HKg5UbI/AAAAAAAAEBg/IcB51t5ov50Yc8FtHRuMi2p_pHJcD1KTwCK4BGAYYCw/s1600/s11%2Bg.webp',
        s11p: 'http://4.bp.blogspot.com/-N_2LNoaEu0c/X8u6J1R3drI/AAAAAAAAEBo/Mhviw8KFpWw4gcNUqqP0NUzbN5flRhSoACK4BGAYYCw/s1600/s11%2Bp.webp',
        s11d: 'http://1.bp.blogspot.com/-iKFZFPpdgig/X8u6EoudFpI/AAAAAAAAEBU/CC0xRiVsKQ0cAYLujipu980EF_MUyGYDwCK4BGAYYCw/s1600/s11%2Bd.webp',
        s11h: '',

        s12s: 'http://1.bp.blogspot.com/-3_dzcwXZrA0/X8u6aoyxvpI/AAAAAAAAECY/W9v0z1LopfYTSvg1mesakz3nYU52b8g_ACK4BGAYYCw/s1600/s12%2Bs.webp',
        s12g: 'http://1.bp.blogspot.com/-GsNqG0ZT7q0/X8u6RmGdpiI/AAAAAAAAECA/Dr-UGa4AcT87QiHHjWcnm_BquIdQcJkkwCK4BGAYYCw/s1600/s12%2Bg.webp',
        s12p: 'http://3.bp.blogspot.com/-eNkuSQKyKAg/X8u6VuJ7OaI/AAAAAAAAECQ/4GbAitY2sTM7U5Faktb91uOEbkG23shFQCK4BGAYYCw/s1600/s12%2Bp.webp',
        s12d: 'http://1.bp.blogspot.com/-kHKNCzLIWBg/X8u6PMljb1I/AAAAAAAAEB4/wyKdG4ZL-AM-7EL6B2oIqgKzfpaWTmrDQCK4BGAYYCw/s1600/s12%2Bd.webp',
        s12h: '',

        s13s: 'http://1.bp.blogspot.com/-NiK2SHq7Ts8/X8u6oFMvw7I/AAAAAAAAEDA/vR3K6nfkH0wTZ2FkQmSxS4y1nZ_Z_5-NwCK4BGAYYCw/s1600/s13%2Bs.webp',
        s13g: 'http://3.bp.blogspot.com/-rEX-_YDIY4c/X8u6g_KaQ0I/AAAAAAAAECo/FBzscFIvXC4cDoPUIhrW7rJg591Pgim-wCK4BGAYYCw/s1600/s13%2Bg.webp',
        s13p: 'http://1.bp.blogspot.com/-v33GqanmQvQ/X8u6jo2VLNI/AAAAAAAAEC0/YG62y-4OMiAwl_HtB4XvZNLxQ5ydsCdGQCK4BGAYYCw/s1600/s13%2Bp.webp',
        s13d: 'http://3.bp.blogspot.com/-t5Yq5GbicDE/X8u6eHaBYEI/AAAAAAAAECg/e0jqBr2uUoMZVxg6SLtWkOpSvkiGMncGACK4BGAYYCw/s1600/s13%2Bd.webp',
        s13h: '',

        s14s: 'http://2.bp.blogspot.com/-Om73UEJ-cA8/X8u62SJvJMI/AAAAAAAAEDg/gqeKzpLQBWc6_tjPTmm1C3GOBXpbD8jZwCK4BGAYYCw/s1600/s14%2Bs.webp',
        s14g: 'http://4.bp.blogspot.com/-Lrda0NdY-8g/X8u6ub4Vv8I/AAAAAAAAEDQ/yvJV3AO_OgcABEMrTWrQ6SftuOF0jD8RACK4BGAYYCw/s1600/s14%2Bg.webp',
        s14p: 'http://2.bp.blogspot.com/-s754j__ivxg/X8u6x8kxFlI/AAAAAAAAEDY/4RRFxqxBSc8IO9AwvzhTS28on6MiAbccwCK4BGAYYCw/s1600/s14%2Bp.webp',
        s14d: 'http://4.bp.blogspot.com/-Og3_icSlkQg/X8u6rVqNE6I/AAAAAAAAEDI/gcRi8YyPfGgMxNvPDtHt9Yzfxq2R9RhxgCK4BGAYYCw/s1600/s14%2Bd.webp',
        s14h: '',

        s15s: 'http://2.bp.blogspot.com/-uOroId7DXPo/X8u7CsEK3KI/AAAAAAAAEEI/RZTb_vPT6lEpGQWJH4MyzzDf0DC7h4G1QCK4BGAYYCw/s1600/s15%2Bs.webp',
        s15g: 'http://4.bp.blogspot.com/-I3j5lTjS3nY/X8u69P3eToI/AAAAAAAAED0/UpnnHnx1iAQZPw8kAF3g0UTx43RgVmOLgCK4BGAYYCw/s1600/s15%2Bg.webp',
        s15p: 'http://1.bp.blogspot.com/-vVOIiWxZns4/X8u6_ypAVlI/AAAAAAAAED8/ZfW3Xp5I8PAufWDxVL-cGmba2s4RJyt8wCK4BGAYYCw/s1600/s15%2Bp.webp',
        s15d: 'http://3.bp.blogspot.com/-qSmH8-jhYx0/X8u66SdYFFI/AAAAAAAAEDo/2oUIBR5OsYUIJSuCLOWwgEHXdHMeWPXFwCK4BGAYYCw/s1600/s15%2Bd.webp',
        s15h: '',

        s16s: 'http://2.bp.blogspot.com/-5NSpFQ1s8A4/X8u7RlgSfJI/AAAAAAAAEFA/ex2n6DaR9IsbF1OIADGkoJUTCzW-F9QrwCK4BGAYYCw/s1600/s16%2Bs.webp',
        s16g: 'http://4.bp.blogspot.com/-SVItzO8M9vQ/X8u7IczJz_I/AAAAAAAAEEc/DkYo2Ka0bdsAYOxBiZ9guTex-ss3_6h4QCK4BGAYYCw/s1600/s16%2Bg.webp',
        s16p: 'http://3.bp.blogspot.com/-GIpqOKAbZpc/X8u7ORQQIFI/AAAAAAAAEE0/LwpytDHxvA8vVXqqVTYNImhO3LNjpi6SgCK4BGAYYCw/s1600/s16%2Bp.webp',
        s16d: 'http://4.bp.blogspot.com/-qYAXi4wrl_0/X8u7F4jjeAI/AAAAAAAAEEQ/P4q4BJp5akYY9sWcYUmAmLXA8BFRTtO3gCK4BGAYYCw/s1600/s16%2Bd.webp',
        s16h: 'http://2.bp.blogspot.com/-EVa7K7CawJw/X8u7L7_5XpI/AAAAAAAAEEo/V4f5gnVoOhEEVU5WHLgitpSgijDpYg6UQCK4BGAYYCw/s1600/s16%2Bh.webp',

        s17s: 'http://2.bp.blogspot.com/-ag-mWPFEOzo/X8u7jGVgkCI/AAAAAAAAEF4/CeAqg3I4x9oLkDsYQTcW6mZAcnyMdSHUwCK4BGAYYCw/s1600/s17%2Bs.webp',
        s17g: 'http://3.bp.blogspot.com/-9sUygH-fs08/X8u7bPsF_vI/AAAAAAAAEFY/Y1LYY_QtA-49ju-twZ8paGGUnp-DGK-yQCK4BGAYYCw/s1600/s17%2Bg.webp',
        s17p: 'http://3.bp.blogspot.com/-i7gRwU1TGsA/X8u7gwvmD8I/AAAAAAAAEFs/_jj4SWnfNJo8lbbfG2syps8apr-vrGVRgCK4BGAYYCw/s1600/s17%2Bp.webp',
        s17d: 'http://2.bp.blogspot.com/-m-_CI6C3g08/X8u7UuvaujI/AAAAAAAAEFI/yosf59HtNVUmhCI2kUcvc0rDMCsI7ANZgCK4BGAYYCw/s1600/s17%2Bd.webp',
        s17h: 'http://3.bp.blogspot.com/-Q1ARqV4TBZw/X8u7eKyxQhI/AAAAAAAAEFk/NFv17jwQHPE1babD9Ycq0BoOTp0LxXMKwCK4BGAYYCw/s1600/s17%2Bh.webp',

        s18s: '',
        s18g: '',
        s18p: '',
        s18d: '',
        s18h: '',
    },
    EP_IMG: {
        S25: 'https://4.bp.blogspot.com/-sQrOHSxIDZ0/X1O99uL4E-I/AAAAAAAADp8/cMsS2YC-LToF-Is8qu-JgSqRNuKRC_qVwCK4BGAYYCw/s1600/6%2B20.webp',
        S26: 'https://4.bp.blogspot.com/-qN18ftO4M4M/X1O-0RuhFqI/AAAAAAAADqI/Tit2aaoXB7kwMHpzRBiP_VyURUMTDFHXgCK4BGAYYCw/s1600/7%2B20.webp',
        S27: 'https://3.bp.blogspot.com/-5gxEOs-7JWA/X1O-4P2hRzI/AAAAAAAADqQ/iWm4PVkVDXQ50Fa6758qIqvMg-DIirMogCK4BGAYYCw/s1600/8%2B20.webp',
    },
    Rank_IMG: {
        bronze1: '',
        bronze2: '',
        bronze3: '',
        silver1: '',
        silver2: '',
        silver3: '',
        gold1: '',
        gold2: '',
        gold3: '',
        gold4: '',
        platinum1: '',
        platinum2: '',
        platinum3: '',
        platinum4: '',
        diamond1: 'https://1.bp.blogspot.com/--EbAz05pEek/X2cCobh2sqI/AAAAAAAADtA/1R_y0_4QDjcC0xQK3tsdXl1bO_gYTbu4wCK4BGAYYCw/s1600/diamond%2B1.webp',
        diamond2: 'https://4.bp.blogspot.com/-MfP7qXwZI2w/X2cCsIf6JkI/AAAAAAAADtI/wObQw46xrYsg00ft0N3ZC44pbftofDhpQCK4BGAYYCw/s1600/diamond%2B2.webp',
        diamond3: 'https://3.bp.blogspot.com/-4ljeIpB3oXg/X2Yur8X3XPI/AAAAAAAADsU/mFc091pbAZ0oaN0jQVKXRbWE6wa1RSvygCK4BGAYYCw/s400/diamond%2B3.webp',
        diamond4: 'https://4.bp.blogspot.com/-ilUFna-sHDQ/X2Yuv1UAwLI/AAAAAAAADsc/cuHbjFfPP5U13dtHkOlpB1ozSXclOtHPwCK4BGAYYCw/s400/diamond%2B4.webp',
        heroic1: '',
    },
    br_scorelist: {
        bronze1: 1000,
        bronze2: 1100,
        bronze3: 1200,
        silver1: 1300,
        silver2: 1400,
        silver3: 1500,
        gold1: 1600,
        gold2: 1725,
        gold3: 1850,
        gold4: 1975,
        platinum1: 2100,
        platinum2: 2225,
        platinum3: 2350,
        platinum4: 2475,
        diamond1: 2600,
        diamond2: 2750,
        diamond3: 2900,
        diamond4: 3050,
        heroic1: 3200,
    },
    CS_maxStar: {
        bronze: 3,
        silver: 4,
        gold: 4,
        platinum: 5,
        diamond: 5,
        heroic: 0,
    },

    vehi: {
        Amp: {
            A0001: {
                name: 'Northern',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601461042091443/4ythvRqLNux/8WwviX6aGse/model.gltf',
                'ios-src': 'https://poly.googleusercontent.com/downloads/c/fp/1601461042091443/4ythvRqLNux/9OHoGqcF8Wt/model.usdz',
            },
            A0002: {
                name: 'RainBow Dash',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601462947710830/2-KhtlFQo5i/8x2dFLquyV7/model.gltf',
                'ios-src': 'https://poly.googleusercontent.com/downloads/c/fp/1601462947710830/2-KhtlFQo5i/b7KZGR0H3rh/model.usdz',
            },
            A0003: {
                name: 'Angel Devil',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601217126091339/85phsAxDbqF/1ALHkuL6aFc/model.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601217126091339/85phsAxDbqF/cyThZaL9LNH/model.usdz',
            },
            name: 'Amphibian',
        },
        Jip: {
            J0001: {
                name: 'Halloween',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601463611214004/6S5vvu1tZ7n/dvTWvuGbCpV/scene.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601463611214004/6S5vvu1tZ7n/cz2ABm2FPdJ/scene.usdz',
            },
            J0002: {
                name: 'Royalguard',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601466599025387/6KzhMzj5M5v/bWekD0mfVGk/Jeep%20Royalguard.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601466599025387/6KzhMzj5M5v/eclRmOfjk3J/Jeep%20Royalguard.usdz',
            },
            J0003: {
                name: 'Easter',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601466731807265/e3YORlZazfO/6oAnqyxVXGw/Jeep%20Easter.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601466731807265/e3YORlZazfO/9IviYm9qR4_/Jeep%20Easter.usdz',
            },
            J0004: {
                name: 'Golden Mecernary',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601466879166093/2AWKKqbNjIP/8rpHe4uT4EF/Jeep GoldenMecernary.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601466879166093/2AWKKqbNjIP/5uqTR2Lj-1v/Jeep GoldenMecernary.usdz',
            },
            J0005: {
                name: 'MadMax',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601466944248027/7hoeO1Vmtzl/6YFd6KED0nt/Jeep MadMax.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601466944248027/7hoeO1Vmtzl/7XJDX485sU6/Jeep MadMax.usdz',
            },
            name: 'Jeep',
        },
        Moto: {
            M0001: {
                name: 'BioBody',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601466878896169/2Zyyo2KDWWy/7M1D03da_Hu/Motobike BioBody.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601466878896169/2Zyyo2KDWWy/210tlGFyDPp/Motobike BioBody.usdz',
            },
            M0002: {
                name: 'Fashionfox',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601466989713373/1mVa6SsWx5L/0ckm8nM4I71/Motobike Fashionfox.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601466989713373/1mVa6SsWx5L/0yyyTWlPWtR/Motobike Fashionfox.usdz',
            },
            M0003: {
                name: 'Gemini',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601467153143656/esKNeiUSNSb/8HMFxZjw3_f/Motobike Gemini.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601467153143656/esKNeiUSNSb/cLcw7Rnf438/Motobike Gemini.usdz',
            },
            M0004: {
                name: 'Cowboy',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601466959504499/8NPBTTDdOyu/1QFktnWKnXh/Motobike Cowboy.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601466959504499/8NPBTTDdOyu/4__ONeFUxB5/Motobike Cowboy.usdz',
            },
            M0005: {
                name: 'Dinosaur',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601467087312381/1slkv9cpzjB/2JKG_NsRNvq/Motobike Dinosaur.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601467087312381/1slkv9cpzjB/fPERCkeHsVM/Motobike Dinosaur.usdz',
            },
            M0006: {
                name: 'Tron',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601467120654993/5AaQleD7oV-/eOJ6WxMjKjI/Motobike Tron.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601467120654993/5AaQleD7oV-/aDBmL-07dM8/Motobike Tron.usdz',
            },
            name: 'Moto',

        },
        RD: {
            RD0001: {
                name: 'Trap Hip Hop',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601467328969252/3u4WNxmddXW/49Fpf8NqGsR/Roadster Traphiphop.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601467328969252/3u4WNxmddXW/7_1XsQhW6Gb/Roadster Traphiphop.usdz',
            },
            RD0002: {
                name: 'Sushikiller',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601467291803125/1hPhy35F6vs/dodsrH9es9S/Roadster Sushikiller.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601467291803125/1hPhy35F6vs/1pQ1KdPtmEi/Roadster Sushikiller.usdz',
            },
            RD0003: {
                name: 'Futuristiccity',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601467057280204/3pS-71azK5y/4XH1oaAEjXz/Roadster Futuristiccity.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601467057280204/3pS-71azK5y/dkrzRMPFMCZ/Roadster Futuristiccity.usdz',
            },
            RD0004: {
                name: 'StarLord',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601467214757826/94dRMGmqcfE/bXPn2EjCok7/Roadster StarLord.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601467214757826/94dRMGmqcfE/adrv8UEM7TP/Roadster StarLord.usdz',
            },
            name: 'Roadster',
        },
        SUV: {
            S0001: {
                name: 'Jumpsuit',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601467470520011/ec7SBvoMSAT/4Ep3NmU3Fd5/SUV Jumpsuit.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601467470520011/ec7SBvoMSAT/7wof5s0y7O1/SUV Jumpsuit.usdz',
            },
            S0002: {
                name: 'Imperial Egypt',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601467245321681/f5HrN7UjaCu/7jk8OSC68HJ/SUV Imperialegypt.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601467245321681/f5HrN7UjaCu/aK-h93Z6cJK/SUV Imperialegypt.usdz',
            },
            name: 'SUV',
        },
        Trk: {
            TR0001: {
                name: 'Apocalypse',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601467512533341/30N5q1exKja/6HJz-F4qgIM/Truck Apocalypse.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601467512533341/30N5q1exKja/1KqtgJMdAul/Truck Apocalypse.usdz',
            },
            TR0002: {
                name: 'Fashiontrends',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601467436591955/eYHpBZfowhl/afS1W5SkStd/Truck Fashiontrends.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601467436591955/eYHpBZfowhl/edAf-TSbwXI/Truck Fashiontrends.usdz',
            },
            name: 'Monster Truck',
        },
        Tutu: {
            T0001: {
                name: 'Solo Clown',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601467884920307/axuTOGI10kX/45SKAEifZGc/Tutu SoloClown.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601467884920307/axuTOGI10kX/3qgwGqrWvT7/Tutu SoloClown.usdz',
            },
            T0002: {
                name: 'Christmas',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601467675875586/dHZTx56mhGw/blUH8k_cUPz/Tutu Christmas.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601467675875586/dHZTx56mhGw/749UmKJkiWq/Tutu Christmas.usdz',
            },
            T0003: {
                name: '8Bit',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601467744029741/a8nAw1VO3z5/6_tYUjWaXNP/Tutu 8Bit.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601467744029741/a8nAw1VO3z5/c5I4YsBBCSj/Tutu 8Bit.usdz',
            },
            T0004: {
                name: 'India New Year',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601467599802532/0YTiSD1isGT/7y-YDKKTJyT/Tutu Indianewyear.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601467599802532/0YTiSD1isGT/7XZU1jx-EnF/Tutu Indianewyear.usdz',
            },
            name: 'Auto Rickshaw',
        },
    },


    pet: {
        kt: {
            kt1: {
                name: 'Anniversary',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601653739614710/2sRsBrqvCSN/1n6SOnIjqLC/cat_Anniversary.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601653739614710/2sRsBrqvCSN/c5PCABoUfuH/cat_Anniversary.usdz',
            },
            kt2: {
                name: 'TigerCat',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601654050293060/8Jv-wUTraOz/3sibxR4YcEt/cat_Tigercat.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601654050293060/8Jv-wUTraOz/dgPfK3x89T9/cat_Tigercat.usdz',
            },
            kt3: {
                name: 'Night',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601653964485922/3zXTDO6kSvO/68jVIr-0Vr0/cat_Night.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601653964485922/3zXTDO6kSvO/9Ql6Q4XlTzH/cat_Night.usdz',
            },
            kt4: {
                name: 'MAX Level 6',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601653983961623/7wYpPabLdXW/fFZrChiL0RO/cat_Ocelot.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601653983961623/7wYpPabLdXW/43hsJ_dlX5U/cat_Ocelot.usdz',
            },
            name: 'Kitty',
        },
        mp: {
            mp1: {
                name: 'Lighting',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601654205536792/3MqYq3XdJii/89CSrHH6NnI/dog_lightning.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601654205536792/3MqYq3XdJii/em40FFJMerb/dog_lightning.usdz',
            },
            mp2: {
                name: 'Iron',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601654181462712/5vY0PlcRZAl/bCSlso2aVf-/dog_irondog.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601654181462712/5vY0PlcRZAl/fXb-Z_GxLJJ/dog_irondog.usdz',
            },
            mp3: {
                name: 'Magnetic',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601654305569731/a1HijqLmG9O/f3YQN5JCKUs/dog_magnetic.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601654305569731/a1HijqLmG9O/fzlZFpKJ99M/dog_magnetic.usdz',
            },
            name: 'Mechanical Pup',
        },
        pt: {
            pt1: {
                name: 'Spirit',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601655420673808/9cJbWHzzb-z/2W5hUp2Xtu6/Panther_Spirit.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601655420673808/9cJbWHzzb-z/9mpum4bTIys/Panther_Spirit.usdz',
            },
            pt2: {
                name: 'Spine',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601655427265029/0pTcWvDN80N/1nbKtJInWnV/Panther_Spine.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601655427265029/0pTcWvDN80N/4Z1ZSNuOw1T/Panther_Spine.usdz',
            },
            pt3: {
                name: 'Purple',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601655478559749/aqwc7V2spH8/eEXZPEgyqv8/Panther_Purple.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601655478559749/aqwc7V2spH8/5WC1G3nO4Hf/Panther_Purple.usdz',
            },
            pt4: {
                name: 'Golden',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601655443964624/dZkhsbGGnWg/dgwhyLt2bBZ/Panther_Golden.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601655443964624/dZkhsbGGnWg/aFhusKAK-gR/Panther_Golden.usdz',
            },
            pt5: {
                name: 'Captain',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601655413454768/2Du4l5_e2Ws/3lKkSnoed5a/Panther_Captain.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601655413454768/2Du4l5_e2Ws/dmxDdTV7nhi/Panther_Captain.usdz',
            },
            name: 'Panther',
        },
        pd: {
            pd1: {
                name: 'Skeleton',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601655151430528/9q-OSpv7Wzy/dn_XwwvWDhr/Panda_Skeleton.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601655151430528/9q-OSpv7Wzy/ck3deYXy3A7/Panda_Skeleton.usdz',
            },
            pd2: {
                name: 'Jumpsuit',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601655161887913/9cN-KBRvK0e/5HyYxmXn2xh/Panda Jumpsuit.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601655161887913/9cN-KBRvK0e/3rG7rgLXz2F/Panda Jumpsuit.usdz',
            },
            pd3: {
                name: 'Booyahday',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601655227193502/d2auOCK7eai/5XeA1aULY5P/Panda_Booyahday.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601655227193502/d2auOCK7eai/31bQBLAmjqp/Panda_Booyahday.usdz',
            },
            pd4: {
                name: 'Christmas',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601655164227671/f_QBRRNBm6Q/eFi9_iEPNC3/Panda_Christma.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601655164227671/f_QBRRNBm6Q/9yJJ-cJ6Yj5/Panda_Christma.usdz',
            },
            pd5: {
                name: 'Thor',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601655263295550/1H_Ld--7mnE/bFpmhV3098q/Panda_thor.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601655263295550/1H_Ld--7mnE/9uwrxt6I18r/Panda_thor.usdz',
            },
            pd6: {
                name: 'Traprap',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601655349724120/7kjwilke7_-/6ds-24KPAm7/pet_3p_Panda_Traprap.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601655349724120/7kjwilke7_-/195tLvLxdrk/pet_3p_Panda_Traprap.usdz',
            },
            pd7: {
                name: 'MAX Level 6',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601654973017019/bjETh_voRfH/eAsYKn8_2rB/Panda brown.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601654973017019/bjETh_voRfH/1BwpeRG3m26/Panda brown.usdz',
            },
            name: 'Panda',
        },
        sb: {
            sb1: {
                name: 'Summer',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601656496424141/dc9_NRCHESG/dxYvWdrvAVb/Shiba_Summer.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601656496424141/dc9_NRCHESG/5Y5zkOMxiz7/Shiba_Summer.usdz',
            },
            sb2: {
                name: 'Halloween',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601656439733002/1-aNj9HrM6b/cRAw-pBGQgN/Shiba_Halloween.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601656439733002/1-aNj9HrM6b/6usF4Zo0YNB/Shiba_Halloween.usdz',
            },
            sb3: {
                name: 'Greendragon',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601656371489267/0B-DjajIupX/cZukgLQVu0E/Shiba_Greendragon.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601656371489267/0B-DjajIupX/98OqDCrgsE-/Shiba_Greendragon.usdz',
            },
            sb4: {
                name: 'Earthdragon',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601656234606749/dyAfNwPV3Bm/cgBuLQSHnsD/Shiba_Earthdragon.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601656234606749/dyAfNwPV3Bm/8TfblgOPQTP/Shiba_Earthdragon.usdz',
            },
            sb5: {
                name: 'Traprap',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601656208822432/69zusBzurxo/0QGKiRSLTJO/pet_3p_Shiba_Traprap.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601656208822432/69zusBzurxo/8rFRuO4H86C/pet_3p_Shiba_Traprap.usdz',
            },
            sb6: {
                name: 'Electricdragon',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601655998939905/6Gyzogk_vMS/cD4Uey13vKe/pet_3p_Shiba_Electricdragon.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601655998939905/6Gyzogk_vMS/4MRJOPmlOLW/pet_3p_Shiba_Electricdragon.usdz',
            },
            name: 'Shiba',
        },
        ro: {
            ro1: {
                name: 'Winterfell',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601655944612290/2cCr7NHRIDd/9cVO4_jQQNW/Robot_Winterfell.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601655944612290/2cCr7NHRIDd/6Ig3d1q9CiQ/Robot_Winterfell.usdz',
            },
            ro2: {
                name: 'Spring',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601656092559046/eB1BU-nczAF/6L7ftn-v6JU/Robot_Spring.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601656092559046/eB1BU-nczAF/eNg_qfs0DcG/Robot_Spring.usdz',
            },
            ro3: {
                name: 'Pharaoh',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601655998813369/0XzomFdkS7v/6Y20jdUrLZa/Robot_Pharaoh.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601655998813369/0XzomFdkS7v/5vEArREuf-C/Robot_Pharaoh.usdz',
            },
            ro4: {
                name: 'Death',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601656033687798/5Ux_meG1OE_/9Z7RDAefXVD/Robot_Death.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601656033687798/5Ux_meG1OE_/dD1xQMr5078/Robot_Death.usdz',
            },
            name: 'Robo',
        },
        fx: {
            fx1: {
                name: 'Valentine',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601656783401589/8Nocgdn4xF5/bb9lVvsEft0/Valentinefox.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601656783401589/8Nocgdn4xF5/9ksnYmUqI0X/Valentinefox.usdz',
            },
            fx2: {
                name: 'Plague',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601656536615382/7niAffm0pJL/15yekDpp-hP/PlagueFox.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601656536615382/7niAffm0pJL/22vqfI5FdyT/PlagueFox.usdz',
            },
            fx3: {
                name: 'Pink',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601656739239164/9W_zk_1MYcW/a2hjPV2O265/Pinkfox.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601656739239164/9W_zk_1MYcW/9iIOUkLT5Li/Pinkfox.usdz',
            },
            fx4: {
                name: 'Blue',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601656579868845/154Q1D_61gG/3VbsHsev8Qc/Bluefox.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601656579868845/154Q1D_61gG/2t3MnqZtKII/Bluefox.usdz',
            },
            fx5: {
                name: 'Black',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601656323463091/avDG1tESTSC/7IGVzsQ1DrZ/Blackfox.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601656323463091/avDG1tESTSC/6jKV5BGQNmn/Blackfox.usdz',
            },
            name: 'Spirit Fox',

        },
        pr: {
            pr1: {
                name: 'Angle',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601655360408772/190YkYyE_LR/6_QO0pL7vtF/pet_Poring_Angle.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601655360408772/190YkYyE_LR/6MBMO1zbFff/pet_Poring_Angle.usdz',
            },
            pr2: {
                name: 'Chieftain',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601655493481882/fai4uO5z9zo/2akG1Xr8eq3/pet_Poring_Chieftain.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601655493481882/fai4uO5z9zo/eLbZqgfC5Ed/pet_Poring_Chieftain.usdz',
            },
            pr3: {
                name: 'POP',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601720248338588/b3gKk1UA-lS/8EPB6j_Z38T/poring pop.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601720248338588/b3gKk1UA-lS/5_zUg99B-Zb/poring pop.usdz',
            },
            name: 'Poring',
        },
        ot: {
            ot1: {
                name: 'MAX Level 6',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601654513406738/f0c6hUis_An/6hLwL1DvnpJ/pet_3p_Otter_Grey.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601654513406738/f0c6hUis_An/6WCii9AFUuB/pet_3p_Otter_Grey.usdz',
            },
            ot2: {
                name: 'Jumpsuit',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601654903922681/9cDbFmc7QSj/dgUxijE0mjF/pet_3p_Otter_Jumpsuit.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601654903922681/9cDbFmc7QSj/7VTSKvKXA8o/pet_3p_Otter_Jumpsuit.usdz',
            },
            ot3: {
                name: 'Pink',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601654870883880/cV9TARykrpb/8hea93cqFh1/pet_3p_Otter_Pink.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601654870883880/cV9TARykrpb/1MQI01nU9eX/pet_3p_Otter_Pink.usdz',
            },
            ot4: {
                name: 'Purple',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601655000493041/56ZGSuqiqFf/5xM80KsKgy7/pet_3p_Otter_Purple.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601655000493041/56ZGSuqiqFf/55dl-zjeudX/pet_3p_Otter_Purple.usdz',
            },
            name: 'Ottero',
        },
        fl: {
            fl1: {
                name: 'Naturehawk',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601653685192278/0YCwvRDBz52/5Q67QnW3Ako/Falco Naturehawk.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601653685192278/0YCwvRDBz52/bq3t9AN8QQ8/Falco Naturehawk.usdz',
            },
            fl2: {
                name: 'Frosthawk',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601653619586980/4yU24o_KzZ0/3TEAeDP_3Cx/Falco Frosthawk.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601653619586980/4yU24o_KzZ0/6yQXWFvnGyc/Falco Frosthawk.usdz',
            },
            fl3: {
                name: 'Firehawk',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601653396080672/eyMtbuuFc0m/eei2RGABPC5/Firehawk.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601653396080672/eyMtbuuFc0m/fVDTC0HJjMs/Firehawk.usdz',
            },
            name: 'Falco',
        },
        wg: {
            wg1: {
                name: 'Anniversary',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601656992041997/5h2vAj2Dff7/b0t4g_DA-XK/pet_3p_Penguin_Anniversary.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601656992041997/5h2vAj2Dff7/afiIPYLFDnp/pet_3p_Penguin_Anniversary.usdz',
            },
            wg2: {
                name: 'Cyber',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601657068726390/7O0LUN9W0s-/0E7CYONYKjG/pet_3p_Penguin_Cyber.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601657068726390/7O0LUN9W0s-/ejwZJSH_JAt/pet_3p_Penguin_Cyber.usdz',
            },
            wg3: {
                name: 'Golden',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601656878050353/cBrZfB29JX8/5UljcOf1_yd/pet_3p_Penguin_Golden.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601656878050353/cBrZfB29JX8/5Wy0GDBxq_4/pet_3p_Penguin_Golden.usdz',
            },
            name: 'Wagger',
        },
        rc: {
            rc1: {
                name: 'Bright',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601655924217531/5BzqcIIxh0w/cJqpnXBm3u6/pet_3p_Raccoon_Bright.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601655924217531/5BzqcIIxh0w/bG_UOVTQr22/pet_3p_Raccoon_Bright.usdz',
            },
            rc2: {
                name: 'Mech',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601655743325203/0djUWSBeyrP/8QRkWnrmrok/pet_3p_Raccoon_Mech.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601655743325203/0djUWSBeyrP/5ztQAJc1ifn/pet_3p_Raccoon_Mech.usdz',
            },
            rc3: {
                name: 'Undead',
                src: 'https://poly.googleusercontent.com/downloads/c/fp/1601655836665560/3A37pig4Nnd/98y_1-6laAM/pet_3p_Raccoon_Undead.gltf',
                "ios-src": 'https://poly.googleusercontent.com/downloads/c/fp/1601655836665560/3A37pig4Nnd/4Ez0S-VYGF7/pet_3p_Raccoon_Undead.usdz',
            },
            name: 'Raccoon',
        },
    },
    emo: {
        c: {
            c1: {
                name: 'Applause',
                src: 'http://1.bp.blogspot.com/-rbtMRhQycmk/X4cJRgfdb7I/AAAAAAAADuc/erpOIBQS4ZQFajMxkiqcf2jNZwbI54tPACK4BGAYYCw/s1600/applause.webp',
            },
            c2: {
                name: 'Arm Wave',
                src: 'http://1.bp.blogspot.com/-ZW6z28BsP1A/X4cJjShSb9I/AAAAAAAADuo/VxcWeYoX3SM7BzsxlSWEN1klWRgstD-JwCK4BGAYYCw/s1600/arm+wave.webp',
            },
            c3: {
                name: 'Dab',
                src: 'http://2.bp.blogspot.com/-tkswI0XDa8E/X4cJn5z9CgI/AAAAAAAADuw/CnuqKwHz4YIDbwTgwJOn3BE4bxTkg-z3wCK4BGAYYCw/s1600/dab.webp',
            },
            c4: {
                name: 'Hello!',
                src: 'http://4.bp.blogspot.com/-jjIu3bevJeA/X4cJ-ftxDgI/AAAAAAAADvA/YYC1IFD8fkYS3f975hUVFitDt4ZLiT5-wCK4BGAYYCw/s1600/hellos.webp',
            },
            name: 'Common',
        },
        r: {
            r1: {
                name: "Aim, Fire!",
                src: 'http://3.bp.blogspot.com/-plMe0yYGZuw/X4cLNon_2nI/AAAAAAAADx8/HqPLQWRrTcIrSr58-XCk56FcMYzjQ-4rgCK4BGAYYCw/s1600/Aim%2C+fire.webp',
            },
            r2: {
                name: 'Baby Shark',
                src: 'http://3.bp.blogspot.com/-o63XlB6efRM/X4cLQXIUN9I/AAAAAAAADyE/9TFYhfax228dmK_dGmMRuYkMbrljAlovACK4BGAYYCw/s1600/baby+shark.webp',
            },
            r3: {
                name: 'Battle Dance',
                src: 'http://1.bp.blogspot.com/-l8IxNk1N1tw/X4cLSYWeODI/AAAAAAAADyQ/0f7n05CteSwm2V5UuV7JOpr5lOCVKJXfQCK4BGAYYCw/s1600/battle+dance.webp',
            },
            r4: {
                name: 'Bon Appetit',
                src: 'http://4.bp.blogspot.com/-FshL1TDG7cA/X4cLUmCQvEI/AAAAAAAADyc/yYQYawsa164bhERcQIdMSEs9OBi4Ts0vgCK4BGAYYCw/s1600/bon+appetit.webp',
            },
            r5: {
                name: 'Break Dance',
                src: 'http://2.bp.blogspot.com/-4EaPbZUdCzA/X4cLahBCskI/AAAAAAAADyk/GZx0VhNRCR82h_O_3g5BeArdEnz2Yr3dgCK4BGAYYCw/s1600/break+dance.webp',
            },
            r6: {
                name: 'Bring It On!',
                src: 'http://2.bp.blogspot.com/-PEwrwvVZUc8/X4cLcjnyZjI/AAAAAAAADys/t6rGPtBiSrQJ5Jd7t2lH2aOTToceTTseQCK4BGAYYCw/s1600/Bring+it+on+%21.webp',
            },
            r7: {
                name: 'Challenge On!',
                src: 'http://1.bp.blogspot.com/-MSCoUntltMg/X4cLeQo6bwI/AAAAAAAADy4/G2kbBvROA0Y_g2LmHOI3a9rzn30T2f7PwCK4BGAYYCw/s1600/challenge+on%21.webp',
            },
            r8: {
                name: 'Crane Kick',
                src: 'http://1.bp.blogspot.com/-x3qEfNE3ahA/X4cLnRLmYvI/AAAAAAAADzM/2mKGCL65Hk0DBJ6vY7UV_3oYiupb34iCgCK4BGAYYCw/s1600/crane+kick.webp',
            },
            r9: {
                name: 'Dangerous Game',
                src: 'http://4.bp.blogspot.com/-ogmI3k76WJc/X4cLp5OvOhI/AAAAAAAADzU/RjzmgZ1c26w3tnA9CD3Lu8JHsufLJbwrwCK4BGAYYCw/s1600/dangerous+game.webp',
            },
            r10: {
                name: 'Death Glare',
                src: 'http://2.bp.blogspot.com/-uShl2vmsw9U/X4cLsH2carI/AAAAAAAADzc/BCiMLWzyjaY1N-w6EQ5A2Y9LPOxbWqZsgCK4BGAYYCw/s1600/death+glare.webp',
            },
            r11: {
                name: "Devil's Move",
                src: 'http://2.bp.blogspot.com/-zzDbCIIDGbA/X4cLuQarObI/AAAAAAAADzs/iQN9twZnSYUmnboQbZSbpRkmQk2zFtWiwCK4BGAYYCw/s1600/devil%27s+move.webp',
            },
            r12: {
                name: 'Dragon Fist',
                src: 'http://3.bp.blogspot.com/-cMiaGLcox6w/X4cLxolfwEI/AAAAAAAADz0/oB2IjgV0o6ISAFCudnnu8mgxhzUyNilcACK4BGAYYCw/s1600/dragon+fist.webp',
            },
            r13: {
                name: 'Dust Off',
                src: 'http://3.bp.blogspot.com/-n4bKKqsx2Kg/X4cLz-J-UQI/AAAAAAAADz8/PpaJugtK-lQyOLZBcT56Nn8vEF0rEo_twCK4BGAYYCw/s1600/dust+off.webp',
            },
            r14: {
                name: 'Fancy Hands',
                src: 'http://4.bp.blogspot.com/-OuK0Scl4vFM/X4cL2YUd_PI/AAAAAAAAD0E/QZo_6clLBpwtL6bS2t8oLyGoLW455pPAACK4BGAYYCw/s1600/fancy+hands.webp',
            },
            r15: {
                name: 'Furious Slam',
                src: 'http://3.bp.blogspot.com/-tNqmQok8R8Y/X4cL5PK16QI/AAAAAAAAD0M/c3w0-uyKmAQ1tY8fBGmQDfEt6vTq6sg9ACK4BGAYYCw/s1600/furious+slam.webp',
            },
            r16: {
                name: 'Glorious Spin',
                src: 'http://4.bp.blogspot.com/-j_L6H7g7epA/X4cMAteM81I/AAAAAAAAD0c/kq0kD8JVZF4PFuLnQzJ0_epaAOTNy3hlACK4BGAYYCw/s1600/glorious+spin.webp',
            },
            r17: {
                name: 'High Five',
                src: 'http://4.bp.blogspot.com/-89GcaDb3y2Q/X4cMDLdieTI/AAAAAAAAD0k/qMHI2DJ18xEW9frSO_l66FzHRyGFdFefgCK4BGAYYCw/s1600/high+five+.webp',
            },
            r18: {
                name: 'Jaguar Dance',
                src: 'http://3.bp.blogspot.com/-LXw_JUuYKYk/X4cMFpGr67I/AAAAAAAAD0w/FMBPayQ3kiYYYgyQTF6DyoEsTL--qWcqACK4BGAYYCw/s1600/jaguar+dance.webp',
            },
            r19: {
                name: 'Jig Dance',
                src: 'http://1.bp.blogspot.com/-L9iDcYuHdFw/X4cMH9AEHjI/AAAAAAAAD04/RSxXr0D4LfskzCaRgvu632JiVAQPK8G2ACK4BGAYYCw/s1600/jig+dance.webp',
            },
            r20: {
                name: 'Lasso',
                src: 'http://4.bp.blogspot.com/-vys7Oi8jDag/X4cMKYlp9gI/AAAAAAAAD1E/Zqre9j9Y6DQyI1RRA-9M1FuT84heI4CIACK4BGAYYCw/s1600/lasso.webp',
            },
            r21: {
                name: 'LOL',
                src: 'http://1.bp.blogspot.com/-oNEIYawKcCk/X4cMM_vkk3I/AAAAAAAAD1M/-9NBC9bI44Q9DjCtcEH3c0pX4pUM5uXdACK4BGAYYCw/s1600/lol.webp',
            },
            r22: {
                name: 'Moon Flip',
                src: 'http://4.bp.blogspot.com/--UMebPCJChA/X4cMnrak33I/AAAAAAAAD1g/DJWeRy8qc68M-m99Gyic7vaCxn3W3Va_gCK4BGAYYCw/s1600/moon+flip+.webp',
            },
            r23: {
                name: 'Mummy Dance',
                src: 'http://3.bp.blogspot.com/-vVjcaMzw0Es/X4cMqdG0SpI/AAAAAAAAD1o/GokJWA6K1l0JUi_BKyx24QEHatg2aZxbgCK4BGAYYCw/s1600/mummy+dance.webp',
            },
            r24: {
                name: 'Party Dance',
                src: 'http://1.bp.blogspot.com/-xsMNrog3cmc/X4cMtgZxzWI/AAAAAAAAD1w/HbW87EtHHvI9hlVcEEZU5VAniwsEMnXWACK4BGAYYCw/s1600/party+dance.webp',
            },
            r25: {
                name: 'Piece Of Cake',
                src: 'http://2.bp.blogspot.com/-5NG5l8E3xBo/X4cMwKR8gfI/AAAAAAAAD14/gukBrsIMnVsrLUAI-_nUE5YcsjpyTF9GwCK4BGAYYCw/s1600/piece+of+cake.webp',
            },
            r26: {
                name: 'Provoke',
                src: 'http://1.bp.blogspot.com/-7EGs-3poCHk/X4cMyQbSg1I/AAAAAAAAD2A/lk10z3MfcNwflPCU4QulrxXYs6DCfcZ-QCK4BGAYYCw/s1600/provoke.webp',
            },
            r27: {
                name: 'Push-Up',
                src: 'http://2.bp.blogspot.com/-2TDUSPsKX18/X4cM18ghX_I/AAAAAAAAD2I/G251PqhupSELU42faFKLPmiti40LQvZsgCK4BGAYYCw/s1600/push+up.webp',
            },
            r28: {
                name: 'Shake It Up',
                src: 'http://2.bp.blogspot.com/-JVURlog1g_k/X4cM4ZCTShI/AAAAAAAAD2U/Gb1IZadec00F2NaulfwMhzsz0fodkmLNwCK4BGAYYCw/s1600/shake+it+up.webp',
            },
            r29: {
                name: 'Shake With Me',
                src: 'http://1.bp.blogspot.com/-QlNxvVCoPuY/X4cM7LG_NCI/AAAAAAAAD2g/04xPSQP-iesp3KJ2IKfRQ_OmtL1akbf4QCK4BGAYYCw/s1600/shake+with+me.webp',
            },
            r30: {
                name: 'Shimmy',
                src: 'http://4.bp.blogspot.com/-w1mua0pTPkk/X4cM9R5Jc9I/AAAAAAAAD2o/yqzlRrc6bQU_iLbJOMzO2mEJJ6ZsXtE8QCK4BGAYYCw/s1600/shimmy.webp',
            },
            r31: {
                name: 'Shoot Dance',
                src: 'http://2.bp.blogspot.com/-i3_HJXvY4ys/X4cM_jOCoRI/AAAAAAAAD20/cVRNx79MMoEeJQvCCm-kpbEZmVL43rF9gCK4BGAYYCw/s1600/shoot+dance.webp',
            },
            r32: {
                name: 'Shuffling',
                src: 'http://4.bp.blogspot.com/--xXwOpxytYs/X4cOr-sjY3I/AAAAAAAAD3U/9ciWQKnNxhwNIGeJz9dCdnQ9oCdLaqBjwCK4BGAYYCw/s1600/shuffling.webp',
            },
            r33: {
                name: 'Soul Shaking',
                src: 'http://4.bp.blogspot.com/-WJQ1_nU42Mg/X4cOuhdQMjI/AAAAAAAAD3c/CzcfePtPkN8l24h0ih7-A_8AHXsAaScQwCK4BGAYYCw/s1600/soul+shaking.webp',
            },
            r34: {
                name: 'The Swan',
                src: 'http://1.bp.blogspot.com/-eDJysgZaTQs/X4cOxd4y6EI/AAAAAAAAD3k/Oe9E7kanQFk3iAjPg9KWSGeMWuURTELVACK4BGAYYCw/s1600/the+swan.webp',
            },
            r35: {
                name: 'Threaten',
                src: 'http://1.bp.blogspot.com/-ZpC2e9rHzNc/X4cO0JkDiSI/AAAAAAAAD3s/FduzaxRqHhIWkYbqVqr0VPOfgF-M7KxUACK4BGAYYCw/s1600/threaten.webp',
            },
            r36: {
                name: 'Why? Oh Why?',
                src: 'http://4.bp.blogspot.com/-4UqUE2naFsk/X4cO2qiEDYI/AAAAAAAAD30/bNm_o5DdsfoDXlaXjgUJfw_0YbQIv0dzQCK4BGAYYCw/s1600/Why+Oh+Why.webp',
            },
            r37: {
                name: 'Wiggle Walk',
                src: 'http://4.bp.blogspot.com/-vdYeXj8beVM/X4cO42NTCwI/AAAAAAAAD38/jgG-dLaWO3M4E8oxSAuA46KHOAY_guyCgCK4BGAYYCw/s1600/wiggle+walk.webp',
            },
            name: 'Rare',
        },
        l: {
            l1: {
                name: 'BOOYAH!',
                src: 'http://3.bp.blogspot.com/-_hDHhbgAarI/X4cKF526ZeI/AAAAAAAADvI/evUba195vcU1EAZXD7SBOUhitsiDm6v0ACK4BGAYYCw/s1600/booyah%21.webp',
            },
            l2: {
                name: 'Captain Booyah',
                src: 'http://3.bp.blogspot.com/-MoMdp1v1cS8/X4cKVEdhz-I/AAAAAAAADvU/hsHgXnB0f-k8hZtmZDwrK6z6rj70mCq_gCK4BGAYYCw/s1600/captain+booyah.webp',
            },
            l3: {
                name: 'Chicken',
                src: 'http://2.bp.blogspot.com/-dq6lAfJfJ4k/X4cKaGQEDFI/AAAAAAAADvg/7UX9pPl-FmoCUzmHYi7jllKS9u5AwOfHwCK4BGAYYCw/s1600/chicken.webp',
            },
            l4: {
                name: 'Doggie',
                src: 'http://3.bp.blogspot.com/-Vs4mFsrAemc/X4cKc1ISsbI/AAAAAAAADvo/qP_DuZxUSRMzJyXU4tmzPgx27z3P96QtQCK4BGAYYCw/s1600/doggie.webp',
            },
            l5: {
                name: 'Eat My Dust',
                src: 'http://2.bp.blogspot.com/-MvHAsNl7ZY0/X4cKfLQgtBI/AAAAAAAADvw/9BwYGshL9NAf7JfW-BBMUWKzrmG_Bm6vACK4BGAYYCw/s1600/eat+my+dust.webp',
            },
            l6: {
                name: 'FFWC Throne',
                src: 'http://1.bp.blogspot.com/-bzFqTSt1toA/X4cKlyBwqmI/AAAAAAAADv8/cqZWVCVUzHALqN-8bGJ9k0Uc0isgz2UnACK4BGAYYCw/s1600/FFWC+throne.webp',
            },
            l7: {
                name: 'Flowers Of Rose',
                src: 'http://3.bp.blogspot.com/-gmQwbO2RN04/X4cKoZ2spiI/AAAAAAAADwE/Zbd1vYpiNm8nkduEE7cplbd9j1tKnF7GQCK4BGAYYCw/s1600/flower+of+rose.webp',
            },
            l8: {
                name: 'I Heart You',
                src: 'http://4.bp.blogspot.com/-jskxSsfBz0w/X4cKqu7AaZI/AAAAAAAADwQ/RaT6igAzUW85YN85iYvnxa0gnhHoe_h9ACK4BGAYYCw/s1600/i+heart+you.webp',
            },
            l9: {
                name: "I'm Rich!",
                src: 'http://2.bp.blogspot.com/-vgpnl0QS4Nk/X4cKtLsYq-I/AAAAAAAADwc/gLX5fzH_Wy4Wh8_g_PCaBmWm1dxCuVFuwCK4BGAYYCw/s1600/I%27m+Rich%21.webp',
            },
            l10: {
                name: 'Kongfu',
                src: 'http://3.bp.blogspot.com/-rGpaqgBSqN0/X4cKvS7s8NI/AAAAAAAADwo/Bvl-EoizkBw4PalhyKZfQXI1n8iBr8AzgCK4BGAYYCw/s1600/kongfu.webp',
            },
            l11: {
                name: "Let's Go!",
                src: 'http://4.bp.blogspot.com/-vS5OnKa-Bsc/X4cKyLL2jiI/AAAAAAAADww/w9k4Ukp9BdYhphKZbRao-kC5OZU8go0LgCK4BGAYYCw/s1600/let%27s+go%21.webp',
            },
            l12: {
                name: 'Make It Rain',
                src: 'http://1.bp.blogspot.com/-dt3cEfuJgbU/X4cK0qDJxUI/AAAAAAAADw4/PwJONQJydhg_xZ3pjwN3_KHEX40H-lROQCK4BGAYYCw/s1600/make+it+rain.webp',
            },
            l13: {
                name: "Pirate's Flag",
                src: 'http://4.bp.blogspot.com/-B9_xlgTsRz0/X4cK3aTFxaI/AAAAAAAADxA/IQ197C0TiN0Zg5Q90O_ZPpGXzPpOBMIAACK4BGAYYCw/s1600/pirate%27s+flag.webp',
            },
            l14: {
                name: 'Power Of Money',
                src: 'http://3.bp.blogspot.com/-F8YX2ODOICw/X4cK57yCfMI/AAAAAAAADxI/AOhIrtdl7ts-h6K2RMpq46GxosToKthoQCK4BGAYYCw/s1600/power+of+money.webp',
            },
            l15: {
                name: 'Selfie',
                src: 'http://3.bp.blogspot.com/-LizvJllV6Ik/X4cK8NT9xII/AAAAAAAADxU/q1WErtsHyFU5kzTo2hliQAbwZ_5hgoeGQCK4BGAYYCw/s1600/selfie.webp',
            },
            l16: {
                name: 'Tea Time',
                src: 'http://3.bp.blogspot.com/-MICtRHzh_WE/X4cLB2K-sSI/AAAAAAAADxg/x30oHt37PrUIEctwzGbEgp2YncxWWEKtACK4BGAYYCw/s1600/tea+time.webp',
            },
            l17: {
                name: 'Top DJ',
                src: 'http://3.bp.blogspot.com/-efsXihxbhwM/X4cLEDnpTqI/AAAAAAAADxs/psUMLlFlXiQ7TYP5OoyiFlV3rAkR7h7sgCK4BGAYYCw/s1600/top+dj.webp',
            },
            name: 'Legendary',
        },
    },
    G_Info: {
        '12345678': {
            name: 'DadasGroup',
            glory: '100000',
            create: '20060723',
        },
    },
}