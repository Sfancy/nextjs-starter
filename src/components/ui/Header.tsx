import { Flex, Text } from '@radix-ui/themes';

export default function Header({ title }: { title: string }) {
  const badge = process.env.NODE_ENV === 'development' ? 'dev' : 'prod';
  return (
    <header className="w-full sticky top-0 z-10">
      <Flex minHeight="var(--nav-height)" style={{ backgroundColor: '#333' }} align="center" px="6" py="2">
        <Flex gap="1" align="baseline">
          <Text size="4" weight="bold" style={{ color: '#fff' }}>
            {title}
          </Text>
          <Text color="red" size="2">
            {badge}
          </Text>
        </Flex>
        <Flex ml="auto">
          <button className="table-cell w-6 h-6 text-center border rounded-full border-white text-white text-[10px]">
            YW
          </button>
        </Flex>
      </Flex>
    </header>
  );
}
