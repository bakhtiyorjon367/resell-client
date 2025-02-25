import { Box, Stack } from "@mui/material";
import { useState } from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Swiper, SwiperSlide } from "swiper/react";
import FreeItemsCard from "./FreeItemsCard";
import { useTranslation } from "react-i18next";
import { GET_PRODUCTS } from "../../../apollo/user/query";
import { useMutation, useQuery } from "@apollo/client";
import { T } from "../../types/common";
import { Product } from "../../types/product/product";
import { ProductsInquiry } from "../../types/product/product.input";
import { LIKE_TARGET_PRODUCT } from "../../../apollo/user/mutation";
import { Message } from '../../enums/common.enum';
import { sweetMixinErrorAlert } from "../../sweetAlert";
interface FreeItemsProps{
    initialInput: ProductsInquiry;
};

const FreeItems = (props: FreeItemsProps) => {
    const { t, i18n } = useTranslation('common');
    const { initialInput } = props;
    const [products, setProducts] = useState<Product[]>([]);
    /** APOLLO REQUESTS **/
    const{ 
        loading:getFreeItemsLoading,
        data:getFreeItemsData, 
        error:getFreeItemsError, 
        refetch:getFreeItemsRefetch
    } = useQuery(GET_PRODUCTS, {
        fetchPolicy:"cache-and-network",
        variables:{input: initialInput},
        notifyOnNetworkStatusChange:true,
        onCompleted:(data:T) => {
            setProducts(data?.getProducts?.list);
        },
    });
    const [likeTargetProduct] = useMutation(LIKE_TARGET_PRODUCT);

    /** HANDLERS **/
    const likeProductHandler = async(user:T, id:string) => {
        try{
            
            if(!id) return;
            if(!user._id) throw new Error(Message.NOT_AUTHENTICATED);

            await likeTargetProduct({
                variables:{input: id}
            });
            await getFreeItemsRefetch({input:initialInput});

        }catch(err:any){
            console.log("ERROR, likeTargetProductHandler", err.message);
            sweetMixinErrorAlert(err.message).then();
        }
    };
    if(!products) return null;

    return (
        <Stack className={"component"}>
            <Stack className={"container"}>
                <Stack className={"info-box"}>
                    <Box className={"left"}>
                        <span>{t('Sharings')}</span>
                    </Box>
                    <Box className={"right"}>
                        <div className={"pagination-box"}>
                            <WestIcon className={"swiper-prev"}/>
                            <div className={"swiper-pagination"}></div>
                            <EastIcon className={'swiper-next'}/>
                        </div>
                    </Box>
                </Stack>
                <Stack className={"card-box"}>
                    {products.length === 0 ? (
                        <Box className={"empty-list"}>Empty</Box>
                    ):(
                        <Swiper
                            className={"card-swiper"}
                            slidesPerView={4}
                            spaceBetween={15}
                            navigation={{
                                nextEl:".swiper-next",
                                prevEl:".swiper-prev",
                            }}
                            pagination={{
                                el:".swiper-pagination",
                            }}
                        >
                            {products.map((product:Product, index) => {
                                return (
                                    <SwiperSlide key={product._id} className={"card-slide"}>
                                        <FreeItemsCard product={product} likeProductHandler={likeProductHandler}/>
                                        <div style={{color:'white', marginBottom:'-10px'}}>{product.productTitle}</div>
                                        <div style={{color:'green'}}>Sharing</div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    )}
                </Stack>
            </Stack>
        </Stack>
    );
};

FreeItems.defaultProps = {
    initialInput: {
        page:1,
        limit:8,
        sort:'createdAt',
        search:{
            productSharing:true,
        },
    },
};

export default FreeItems;