import { Card, Text, Metric, Flex, SparkAreaChart } from '@tremor/react';
import { ComponentPropsWithoutRef, FC } from 'react';

export const chartdata = [
	{
		month: 'Jan 21',
		Performance: 4000,
		Benchmark: 3000,
	},
	{
		month: 'Feb 21',
		Performance: 3000,
		Benchmark: 2000,
	},
	{
		month: 'Mar 21',
		Performance: 2000,
		Benchmark: 1700,
	},
	{
		month: 'Apr 21',
		Performance: 2780,
		Benchmark: 2500,
	},
	{
		month: 'May 21',
		Performance: 1890,
		Benchmark: 1890,
	},
	{
		month: 'Jun 21',
		Performance: 2390,
		Benchmark: 2000,
	},
	{
		month: 'Jul 21',
		Performance: 3490,
		Benchmark: 3000,
	},
];

export const TokenCard: FC<TokenCardProps> = ({ categoryName }) => {
	return (
		<Card>
			<Flex alignItems="start">
				<Text>Sales</Text>
			</Flex>
			<Flex className="justify-between mt-4 mb-10" alignItems="baseline">
				<Metric>1 BTC = $ 34.019</Metric>
				<Text color={'green'}>25.3%</Text>
			</Flex>
			<SparkAreaChart
				data={chartdata}
				categories={['Performance']}
				index={'month'}
				colors={['emerald']}
				className="min-h-28 w-full"
			/>
		</Card>
	);
};

type TokenCardProps = ComponentPropsWithoutRef<typeof Card> & {
	categoryName: string;
};
