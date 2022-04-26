import React from "react";
import { Box, Flex, Spacer, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";

function PropertyDetails({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    photos,
    amenities
  },
}) {
   
  return (
    <Box maxWidth="1000px" margin="auto" p="4">
      {photos && <ImageScrollbar data={photos} />}
      <Box w="full" p="6">
        <Flex paddingTop="2" alignItems="center">
          <Box w="full">
            <Text fontSize="lg" letterSpacing="1px">
              {title.length > 30 ? `${title.substring(0, 60)}...` : title}
            </Text>

            <Flex
              paddingTop="2"
              alignItems="center"
              justifyContent="space-between"
            >
              <Flex alignItems="center">
                <Box color="green.400">{isVerified && <GoVerified />}</Box>
                <Text fontWeight="bold" fontSize="xl">
                  Asking: USD {millify(price)}
                  {rentFrequency && `/${rentFrequency}`}
                </Text>
              </Flex>
            
              <Box>
                <Avatar size="md" src={agency?.logo?.url} />
              </Box>
            </Flex>
            <Flex
              alignItems="center"
              p="1"
              w="300px"
              justifyContent="space-between"
              color="blue.400"
            >
              {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
              <BsGridFill />
            </Flex>
                
            <Box>
              <Text marginTop="2" letterSpacing="0.5px" lineHeight="1.5rem">
                {description}
              </Text>
            </Box>
            { amenities.length > 0 ? 
                (<Flex flexWrap="wrap" alignItems="center">
                    
                <Text fontSize="xl" fontWeight="bold" marginRight="2">Amenities:</Text>
                {amenities.map(amenity => (
                    <Text color="green.400" backgroundColor="gray.200" m="1" fontWeight="bold" p="2" fontSize="md"  key={amenity.text}>{amenity.text}</Text> 
                ))}
            </Flex>) : ""
                }
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const property = await fetchApi(
    `${baseUrl}/properties/detail?externalID=${id}`
  );

  return {
    props: {
      propertyDetails: property,
    },
  };
}
export default PropertyDetails;
