import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View, StyleSheet} from 'react-native';
import {User} from '../types/user';
import axios from 'axios';
import {Avatar, Card, Text} from 'react-native-paper';

const {Content} = Card;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 6,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  textContainer: {
    gap: 6,
  },
});

type UserCardProps = {
  user: User;
};

const UserCard = ({user}: UserCardProps) => {
  return (
    <Card mode="contained" style={styles.cardContainer}>
      <Content style={styles.cardContent}>
        <Avatar.Image size={90} source={{uri: user.avatar}} />
        <View style={styles.textContainer}>
          <Text>
            {user.first_name} {user.last_name}
          </Text>
          <Text>{user.email}</Text>
          <Text>{user.date_of_birth}</Text>
        </View>
      </Content>
    </Card>
  );
};

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = useCallback(async () => {
    try {
      const {data} = await axios.get(
        'https://random-data-api.com/api/v2/users?size=10',
      );
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={users}
        renderItem={({item}) => <UserCard user={item} />}
      />
    </SafeAreaView>
  );
};

export default UsersList;
