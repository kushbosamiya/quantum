import React, { useState, useEffect } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Box,
} from "@chakra-ui/react";

// icons
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

const PerformanceQna = () => {
  const QandA = [
    {
      title: "250W to 800W BLDC motors",
      brief: `1) They are more efficient than traditional DC servo motors, meaning they create less heat and need less power to function efficiently.

        2) They have very low amounts of noise, so they're great for applications where quiet operation is a priority.
        
        3) They're more reliable than DC brushed motors since they don't require brushes or commutator to run on AC power from an external source like battery packs or wall outlets.`,
      backgroundColor: `#F0EFE6`,
    },
    {
      title: "1000W to 2000W, 10inch wheel drive",
      brief: `Double Brake system:
        1. Front brake: 10cm drum brake with 2pcs of brake pads;
        
        2. Rear brake: 8cm drum brake with 2pcs of brake pads
        
        Motorized Balancer:
        
        1. Motorized balancer can help to balance the wheel when they are loaded and unloaded;
        
        2. The motorized balancer will make the axis rotate in a particular direction at specific angle to maintain balance during loading and unloading;
        
        3. When the wheel is unloaded, it will rotate at 45 degree angle and make the axis rotate forward toward unloading position, so that there is no need for human operation;`,
      backgroundColor: `#F3F7EA`,
    },
    {
      title: "1500W to 3000W, 17inch wheel drive",
      brief: `The 1500W to 3000W, 17inch wheel drive hub motor is a high-performance, six-speed transmission machine that provides excellent performance and reliability.


        1. The power transmission system is comprised of a gearbox and chain drive. The gearbox can be used in various ways, such as driving the main shaft or directly driving the motor shaft;
        
        2. The chain drive is also strong, with low noise;
        
        3. The three-stage planetary gearbox design can be smooth and stable operation. In addition to the efficiency of a gearbox, it also has good anti-collision ability with high efficiency;
        
        4. With high speed rotation speed (up to 1000rpm), the overload protection mechanism can effectively prevent overloads caused by under-load situations;`,
      backgroundColor: `#FAEFE7`,
    },
  ];

  return (
    <>
      <Box>
        {QandA.map((item, index) => {
          return (
            <Box
              key={index}
              padding={"4%"}
              my={"1rem"}
              // background={item.backgroundColor}
              _hover={{
                background: "#F2F4F6",
                borderRadius:'.25rem'
              }}
            >
              <Accordion allowToggle>
                <AccordionItem
                  background={"none"}
                  outline={"none"}
                  border={"none"}
                >
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton
                          _hover={{
                            background: "none",
                          }}
                        >
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontWeight={"500"}
                            fontSize={"lg"}
                            textStyle="Gentona"
                          >
                            {item.title}
                          </Box>
                          {isExpanded ? (
                            <MinusIcon fontSize="12px" />
                          ) : (
                            <AddIcon fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default PerformanceQna;

//hack for fonts https://stackoverflow.com/questions/70415680/primary-and-secondary-font-with-chakra-ui
