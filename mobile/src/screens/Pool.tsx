import { useCallback, useState } from "react";
import { VStack, Icon, useToast, FlatList } from "native-base";
import { Octicons } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { api } from "../services/api";
import { Button } from "../components/Button";
import { Header } from "../components/Header";

import { Loading } from "../components/Loading";
import { PoolCard, PoolCardProps } from "../components/PoolCard";

import { useAuth } from '../hooks/useAuth';
import { EmptyPoolList } from "../components/EmptyPoolList";

export function Pool() {
    const navigation = useNavigation();
    const toast = useToast();

    const [isLoading, setIsLoading] = useState(true);
    const [pools, setPools] = useState<PoolCardProps[]>([]);

    const { user } = useAuth();

    async function fetchPools() {
        try {
            setIsLoading(true);

            const response = await api.get('/pools');
            setPools(response.data.pools);

        } catch (error) {
            console.log(error);
            
            toast.show({
                title: "Não foi possível carregar os bolões",
                placement: 'top',
                bgColor: 'red.500'
            })
        } finally {
            setIsLoading(false);
        }
    }

    useFocusEffect(useCallback(() => {

        console.log(user);
        
        fetchPools();
    }, []));

    return (
        <VStack flex={1} bgColor="gray.900" >
            <Header title="Meus bolões" />

            <VStack mt={6} mx={5} borderBottomWidth={1} borderBottomColor="gray.600" pb={4} mb={4}>
                <Button
                    title="Buscar bolão por código"
                    leftIcon={<Icon as={Octicons} name="search" color="black" size="md" />}
                    onPress={() => navigation.navigate('find')}
                />
            </VStack>
            {/* <Loading /> */}


            {
                isLoading ? <Loading /> :
                <FlatList
                    data={pools}
                    keyExtractor={pools => pools.id}
                    renderItem={({ item }) => (
                        <PoolCard
                            data={item}
                            onPress={() => navigation.navigate('details', { id: item.id })}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{pb: 10}}
                    ListEmptyComponent={() => <EmptyPoolList />}
                    px={5}
                />
            }

        </VStack>
    );
}