const config = {
    goods_type: '腕表',
    address_title: '零售商地址',
    tel: '110-120-119',
    address: '北京市啊五环背景的地址110-1230',
    record_number: '京ICP备2022022415号-1',
    text_souce: "品牌源于普宁",
    text_detail: "普宁Royalord机械表捍卫属于你的时间",
    text_detail2: "Royalord是来自瑞士的高奢腕表品牌，优美、奢华、典雅是Royalord品牌的最大特点，被誉为腕表界的“瑞士王子”。Royalord手表品牌前身主要为英国、西班牙等国家的皇室定制专属高端腕表，后开始为贵族以及上层社会名流打造私属腕表和珠宝饰品。由于入门条件极高，产量极低（据消息称1906 年至 2015 年存世量不足千余），故 Royalord手表品牌定位在世界奢侈品界属于小众的奢侈品。",
    index_button_title: '探索更多',
    log_list: [
        // img_name 需要换成 http 的url
        { img_name: "https://huangshi.dripcar.com/event/2.png", detail: '1906 年，Cecil Lewis&Jonathan Roberts 在瑞士日内瓦共同创建了首饰工坊。1967年-1986年拥有80年历史的手工作坊由于只为皇室贵族服务的经营理念，未能在激烈的市场竞争中获胜而宣告破产。' },
        { img_name: "https://huangshi.dripcar.com/event/3.png", detail: '1986年，新掌舵人Henry Hughes改变发展方向，接手破产的手工作坊，重新召集核心匠人，传承了手工作坊核心制造工艺，专注于钟表机芯改装与研究。发挥其制造工艺优势，将手工机芯工艺进一步提升到与世界名表同档水平。' },
        { img_name: "https://huangshi.dripcar.com/event/4.png", detail: '1998 年，时任首席设计师的 Richard Edwards 先生曾邀约前 LV 设计师共同参与设计青春 Youth 系列腕表。' },
        { img_name: "https://huangshi.dripcar.com/event/5.png", detail: '2005 年 4 月，为庆祝英国威尔士亲王查尔斯王子大婚，专门定制奢华款腕表。' },
        { img_name: "https://huangshi.dripcar.com/event/6.png", detail: '2006 年，设计推出“世纪百年”纪念款腕表。' },
        { img_name: "https://huangshi.dripcar.com/event/7.png", detail: '2013年，为了庆祝英国知名汽车品牌阿斯顿马丁100周年限量100台的Centenary限量版Vanquish，推出限量款腕表，开启与其他知名品牌的战略合作之路。' },
        { img_name: "https://huangshi.dripcar.com/event/8.png", detail: '2017年5月，Dean White（迪恩·怀特）先生出任首席执行官，并宣布未来几年将主攻中国大陆市场，依据大陆市场进行产品研发，尽快让中国消费者可以与小众奢侈品腕表见面。' },
        { img_name: "https://huangshi.dripcar.com/event/9.png", detail: '2018年，为了庆祝英国知名汽车品牌路虎70周年所推出限量款腕表。' },
        { img_name: "https://huangshi.dripcar.com/event/10.png", detail: '2021年，在巴黎时装周时,CEO迪恩·怀特先生宣布，将联合26位世界潮流设计师共同打造最新系列，并将把品牌鼎盛时期的精髓全部用新的设计理念复刻诠释。历经数十载风雨打磨，2021年品牌正式定名Royalord，开启了在中国大陆市场的新传奇故事，同时授权成立劳亚莱德（北京）珠宝销售有限公司，希望将品牌所蕴含的欧洲皇室美学与中国东方哲学完美融合，为腕表界带来卓越不凡的高享品质。' }
    ],
    goods_items: [
        { image: 'https://huangshi.dripcar.com/home_recom/natural.png', name: '自然系列' },
        { image: 'https://huangshi.dripcar.com/home_recom/extraor.png', name: '超凡系列' },
        { image: 'https://huangshi.dripcar.com/home_recom/super.png', name: '至尊系列' },
        { image: 'https://huangshi.dripcar.com/home_recom/luxur.png', name: '奢华系列' },
        { image: 'https://huangshi.dripcar.com/home_recom/young.png', name: '青春系列' }
    ],
    product_list: [
        { image: 'https://huangshi.dripcar.com/goods/2a1beb27b0fd4a59881ddca8b78ee461/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '1', name: '潜航者黑水鬼', price: '￥ 28,800' },
        { image: 'https://huangshi.dripcar.com/goods/03c4359d2edd4a628a89b1c1a961d39c/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '2', name: '潜航者绿水鬼', price: '￥ 28,800' },
        { image: 'https://huangshi.dripcar.com/goods/13ab29b1a075450b8283b85320a9fcce/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '3', name: '潜航者蓝水鬼', price: '￥ 28,800' },
        { image: 'https://huangshi.dripcar.com/goods/427e027da3dc430cafb53ccef7ef771b/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '4', name: '魅影地球', price: '￥ 26,800' },
        { image: 'https://huangshi.dripcar.com/goods/a48219c09c8f4040b4f6a49eb44fe91c/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '5', name: '传奇星空', price: '￥ 36,800' },
        { image: 'https://huangshi.dripcar.com/goods/abe0dd645c4c4961801a6e071a7e0dbf/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '6', name: '名将', price: '￥ 28,600' },
        { image: 'https://huangshi.dripcar.com/goods/683aa8f25abb4c20b297a1f03e33c160/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '7', name: '海马600', price: '￥ 16,800' },
        { image: 'https://huangshi.dripcar.com/goods/479aeab8c3c940308a244858c95f31d7/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '8', name: '潜航者间金黑', price: '￥ 28,800' },
        { image: 'https://huangshi.dripcar.com/goods/48f2023b84c04be4a28cc598b03e7d08/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '9', name: '手雷', price: '￥ 25,800' },
        { image: 'https://huangshi.dripcar.com/goods/001611f289f14b33aed946c4d23f5d47/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '10', name: '皇家橡树', price: '￥ 13,800' },
        { image: 'https://huangshi.dripcar.com/goods/ad86afa3d26d454d88503e037bb4a724/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '11', name: '迪拿通', price: '￥ 23,800' },
        { image: 'https://huangshi.dripcar.com/goods/b19ad1cd96ae47ba8ca9559500571c14/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '12', name: '蓝气球黑武士', price: '￥ 23,800' },
        { image: 'https://huangshi.dripcar.com/goods/ccb7a6d06c7f4627a135726d3c4ef245/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '13', name: '摩纳哥', price: '￥ 16,800' },
        { image: 'https://huangshi.dripcar.com/goods/3387099d7df644f68f253f71ec977d75/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '14', name: '约会', price: '￥ 13,600' },
        { image: 'https://huangshi.dripcar.com/goods/95d2958c21c845d8b285024a383ae7b2/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '15', name: '潜航者可乐圈', price: '￥ 28,800' },
        { image: 'https://huangshi.dripcar.com/goods/89f345b277814af5ab8896afbba85246/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '16', name: '纵横四海', price: '￥ 23,800' },
        { image: 'https://huangshi.dripcar.com/goods/a367dbcd33df4a1fa7b4d7d1680d4166/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '17', name: '超霸', price: '￥ 18,800' },
        { image: 'https://huangshi.dripcar.com/goods/2d601dd23ab34a27a5b24374853d5642/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '18', name: '飞行员', price: '￥ 13,800' },
        { image: 'https://huangshi.dripcar.com/goods/28777be75e5e491e9e74cc420330cc4b/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '19', name: '柏涛菲诺', price: '￥ 12,800' },
        { image: 'https://huangshi.dripcar.com/goods/a8586e606ed44404a1a224c8c34593c0/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '20', name: '鹦鹉螺', price: '￥ 23,800' },
        { image: 'https://huangshi.dripcar.com/goods/e181bc4c9be540b6998e767bc5f91f29/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '21', name: '传承', price: '￥ 18,800' },
        { image: 'https://huangshi.dripcar.com/goods/ebc4267dc12740338cbc3ab0958a0a52/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '22', name: '蓝气球', price: '￥ 23,800' },
        { image: 'https://huangshi.dripcar.com/goods/80ca10dcb0be4b72b1ef31047e92f09d/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '23', name: '桑托斯山度士', price: '￥ 23,800' },
        { image: 'https://huangshi.dripcar.com/goods/fc3ad7105f9d48bc8ec00719d2364273/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '24', name: '海马300', price: '￥ 18,800' },
        { image: 'https://huangshi.dripcar.com/goods/689b050f48474be3b5f4f979a4f2252c/cover.png?x-oss-process=image/auto-orient,1/resize,p_35/quality,q_90', id: '25', name: '潜航者间金绿', price: '￥ 28,800' },
    ],
    product_details: [
        { id: 1, name: '潜航者黑水鬼', price: '￥ 28,800', params: { type: '628772', movement_type: '自动机械', watch_diameter: '40', watch_shape: '圆形', waterproof: '300', watch_ring_material: '精钢' }, images: ['https://huangshi.dripcar.com/goods/2a1beb27b0fd4a59881ddca8b78ee461/cover.png', 'https://huangshi.dripcar.com/goods/2a1beb27b0fd4a59881ddca8b78ee461/1.jpg?x-oss-process=image/auto-orient,1/resize,m_fill,w_780,h_780/quality,q_90', 'https://huangshi.dripcar.com/goods/2a1beb27b0fd4a59881ddca8b78ee461/2.jpg?x-oss-process=image/auto-orient,1/resize,m_fill,w_780,h_780/quality,q_90', 'https://huangshi.dripcar.com/goods/2a1beb27b0fd4a59881ddca8b78ee461/3.jpg?x-oss-process=image/auto-orient,1/resize,m_fill,w_780,h_780/quality,q_90'] },
        { id: 2, name: '潜航者绿水鬼', price: '￥ 28,800', params: { type: '628772', movement_type: '自动机械', watch_diameter: '40', watch_shape: '圆形', waterproof: '300', watch_ring_material: '黑铁' }, images: ['https://huangshi.dripcar.com/goods/03c4359d2edd4a628a89b1c1a961d39c/cover.png', 'https://huangshi.dripcar.com/goods/03c4359d2edd4a628a89b1c1a961d39c/3.jpg?x-oss-process=image/auto-orient,1/resize,m_fill,w_780,h_780/quality,q_90', 'https://huangshi.dripcar.com/goods/03c4359d2edd4a628a89b1c1a961d39c/5.jpg?x-oss-process=image/auto-orient,1/resize,m_fill,w_780,h_780/quality,q_90', 'https://huangshi.dripcar.com/goods/03c4359d2edd4a628a89b1c1a961d39c/6.jpg?x-oss-process=image/auto-orient,1/resize,m_fill,w_780,h_780/quality,q_90', 'https://huangshi.dripcar.com/goods/03c4359d2edd4a628a89b1c1a961d39c/7.jpg?x-oss-process=image/auto-orient,1/resize,m_fill,w_780,h_780/quality,q_90'] }
    ],
    shop_list: [
        { image: 'https://img0.baidu.com/it/u=748858266,1531380208&fm=253&fmt=auto&app=138&f=JPEG?w=864&h=486', name: '普宁大兴店', address: '普宁市大兴区亦庄科创五街城乡世纪广场3号楼A834室', tel: '110-120-119' },
        { image: 'https://img0.baidu.com/it/u=748858266,1531380208&fm=253&fmt=auto&app=138&f=JPEG?w=864&h=486', name: '深圳小兴店', address: '深圳市大兴区亦庄科创五街城乡世纪广场3号楼B123室', tel: '110-120-119' }
    ]
}

export default config;