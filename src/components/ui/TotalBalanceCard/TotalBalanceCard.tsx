import { Card, Text, Metric, Flex, Title, Button } from '@tremor/react';
export const TotalBalanceCard = () => {
	return (
		<>
			<Title className="mb-4">Total Balance</Title>
			<Card>
				<Flex className="gap-10">
					<Flex className="items-end">
						<Title>$</Title>
						<Metric className="flex items-center">34,743</Metric>
					</Flex>
					<Text color={'green'}>25.3%</Text>
				</Flex>
				<Button
					className="w-full mt-7 !rounded-tremor-button"
					size="lg"
					color="indigo"
				>
					+Add Funds
				</Button>
			</Card>
		</>
	);
};
