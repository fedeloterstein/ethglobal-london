import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { ContractList } from './ContractList'
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';

export const BalanceView = ({data}: any) => {

  const address = useAddress();
  return (
    <Stack alignItems={'center'} w={'100%'}>
        <Stack justify={'center'} pt={10} pb={10}>
            <Heading fontWeight={700} fontSize={'24px'} color={'black'}>💸 Balance</Heading>
        </Stack>
        {address ?     <ContractList data={data}/> : <ConnectWallet /> }
   
    </Stack>
  )
}
