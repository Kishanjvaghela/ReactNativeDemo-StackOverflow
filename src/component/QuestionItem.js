import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { convertRaputation, convertDate } from '../utils/Utils';

export default class QuestionItem extends Component {
  render() {

    const question = this.props.data;
    const { tags, owner } = question;

    return(
        <View style={{
          flexDirection: 'row',
          backgroundColor: '#FFFFFF'
        }}>
          <View style={{
            flex:0.8,
            backgroundColor: '#E3F9ED',
            padding: 10
          }}>
              <View style={{
                  flexDirection: 'row',
                }}>
                    <Text style={{
                      flex: 1,
                      textAlign: 'center'
                    }}>
                      { convertRaputation(question.score) }
                    </Text>
                    <View style={{
                      width:24,
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        width:18,
                        height:18,
                      }}
                      source={require('../icons/up_arrow.png')}
                    />
                    </View>
                </View>
                <View style={{
                  flexDirection: 'row',
                  marginTop: 4
                }}>
                    <Text style={{
                      flex: 1,
                      textAlign: 'center'
                    }}>
                      { question.answer_count }
                    </Text>
                    <Image
                      style={{
                        width:24,
                        height:24,
                      }}
                      source={require('../icons/ic_answer_green.png')}
                    />
                </View>
          </View>
              <View style={{
                flex:3,
                padding: 12
              }}>
                  <Text style={{
                    color: '#0076C6',
                    fontWeight: 'bold',
                    fontSize: 16
                  }}>
                    { question.title }
                  </Text>
                  <Text style={{
                    color: '#337299',
                    fontSize: 14
                  }}>
                    { tags[0] }
                  </Text>
                  <View style={{
                    flexDirection: 'row',
                  }}>
                        <Text style={{
                          fontSize: 12
                        }}>
                           { convertDate(question.creation_date) }
                        </Text>

                        <Text style={{
                          color: '#0076C6',
                          marginLeft: 8,
                          fontSize: 12
                        }}>
                           { owner.display_name }
                        </Text>
                  </View>
              </View>
        </View>
      );
  }
}
