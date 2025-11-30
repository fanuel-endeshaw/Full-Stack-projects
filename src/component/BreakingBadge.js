import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
const COLOR_1 = 'rgb(255, 10, 10)'; // Bright Red
const COLOR_2 = 'rgb(46, 84, 255)'; // Orange
const INTERVAL_MS = 800;
const BreakingBadge = ({styleProp}) => {
    const [badgeColor, setBadgeColor] = useState(COLOR_1);

    // ... (useEffect hook from step 2)
    useEffect(() => {
      const toggleColor = () => {
        setBadgeColor(prevColor => 
          prevColor === COLOR_1 ? COLOR_2 : COLOR_1
        );
      };
      const timerId = setTimeout(toggleColor, INTERVAL_MS);
      return () => clearTimeout(timerId);
    }, [badgeColor]);
  
    return (
      <View style={[styles.badgeContainer, {styleProp},{ backgroundColor: badgeColor }]}>
        <Text style={styles.badgeText}>
          Breaking News
        </Text>
      </View>
    );
  };

export default BreakingBadge

const styles = StyleSheet.create({
    badgeContainer: {
        // Dynamic background color is applied here
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 14,
        alignSelf: 'flex-start', // Important to make it wrap the content
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3, // Android shadow
        position: 'absolute',
        top:'1%',
        left: '1%'
      },
      badgeText: {
        color: '#FFFFFF', // White text for contrast
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 0.5,
      },
})