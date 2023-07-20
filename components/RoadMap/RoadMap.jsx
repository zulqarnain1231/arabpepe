import React from "react";
import Wrapper from "../shared/Wrapper";
import Heading from "../shared/Typography/Heading";
import * as Icons from "../../constants/Svg/Icons";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import MapCard from "./MapCard";
import Data from "../../constants/Json/Dummy.json";
 
const RoadMap = () => {
  return (
    <Wrapper id="roadMap" style="py-16">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <Heading text="Road Map" />
        <div className="w-full">
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector className="h-[300px]" />
              </TimelineSeparator>
              <MapCard
                title="Phase 1: Token Strategy & Partnerships (Month 1-2)"
                options={Data.roadMap.phase1}
              />
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector className="h-[300px]" />
              </TimelineSeparator>
              <MapCard
                title="Phase 2: Digital Presence & Listings (Month 1-2)"
                options={Data.roadMap.phase2}
              />
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector className="h-[300px]" />
              </TimelineSeparator>
              <TimelineContent>
                <MapCard
                  title="Phase 3: Community & Market Growth (Month 1-2)"
                  options={Data.roadMap.phase3}
                />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <MapCard
                title="Phase 4: Exchange Listing & Brand Expansion (Month 3)"
                options={Data.roadMap.phase4}
              />
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </Wrapper>
  );
};

export default RoadMap;
