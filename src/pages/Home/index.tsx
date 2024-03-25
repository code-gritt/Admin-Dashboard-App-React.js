import { UpcomingEvents } from "../../components/home/upcoming-events/upcoming-events";
import { DealsChart } from "../../components/home/deals-chart/deals-chart";
import { Col, Row } from "antd";
import { DashboardTotalCountCard } from "../../components/home/total-count-cards.tsx/index";
import { useCustom } from "@refinedev/core";
import { DashboardTotalCountsQuery } from "@/graphql/types";
import { DASHBOARD_TOTAL_COUNTS_QUERY } from "../../components/queries";

export const Home = () => {
  const { data, isLoading } = useCustom<DashboardTotalCountsQuery>({
    url: "",
    method: "get",
    meta: {
      gqlQuery: DASHBOARD_TOTAL_COUNTS_QUERY,
    },
  });
  return (
    <div>
      <Row gutter={[32, 32]} style={{ marginTop: "32px" }}>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource={"companies"}
            totalCount={data?.data.companies.totalCount}
            isLoading={false}
          />
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource={"contacts"}
            totalCount={data?.data.contacts.totalCount}
            isLoading={false}
          />
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource={"deals"}
            totalCount={data?.data.deals.totalCount}
            isLoading={false}
          />
        </Col>
      </Row>
      <Row gutter={[32, 32]} style={{ marginTop: "32px" }}>
        <Col
          xs={24}
          sm={24}
          xl={8}
          style={{
            height: "460px",
          }}
        >
          <UpcomingEvents />
        </Col>
        <Col
          xs={24}
          sm={24}
          xl={16}
          style={{
            height: "460px",
          }}
        >
          <DealsChart />
        </Col>
      </Row>
    </div>
  );
};
