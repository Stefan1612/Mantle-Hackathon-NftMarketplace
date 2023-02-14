import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
export default function SimpleAccordion() {
  return (
    <div style={{ marginTop: "5vh", marginBottom: "6vh" }}>
      <Box marginBottom={"2vh"}>
        <Typography variant={"h3"} component={"h3"}>
          FAQ section
        </Typography>
      </Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>What is the Mantle Network?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you know what polygon is and what the idea of creating polygon
            was, you already know a lot about the Mantle Network. Mantle is just
            like polygon a layer-2 solution for the Ethereum chain and is EVM
            compatible. The difference between polygon and the Mantle Network is
            the way they are achieving the lower costs and therefore more
            scalable alternative then the regular Ethereum blockchain. The
            Mantle network is a optimistic Rollup while Polygon is a sidechain.
            Those bring their own sets of benefits and if you are interested in
            a more in-depth explanation, feel free to check their docs:
            https://docs.mantle.xyz/introducing-mantle/a-gentle-introduction
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>What are the minting fees?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Minting an NFT cost 0.002 bit</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Are there any purchase/selling fees?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, currently there are only fees for minting. The minting fee is
            0.002 (in Bit){" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Why can't I see my other NFT's?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This NFT market only shows you the NFT's which you have minted
            within this market
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>
            Can other Markets like Opensea, see the NFT's minted within this
            market?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, every NFT minted on this market will also be visible on other
            NFT markets if they decide to do so (Opensea shows all NFT's as
            default)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Where do the NFT's get stored?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The tokenURL gets stored on-Chain, on the Mantle Testnet (a layer-2
            solution - optimistic Rollup) and the metadata including the image
            itself, get stored off-Chain on IPFS to reduce gas costs even
            further.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
