import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, Animated, ScrollView } from 'react-native';
import { ExamnButton } from 'Components/Buttons';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

import ScoreComponent from 'Screens/PracticesScreen/PracticeScreen/Score'
import ExamQuestions from '../../../questions.json';

const sortQuestions = () => {
	const sortedQuestions = ExamQuestions.sort((a,b) => 0.5 - Math.random());
	return sortedQuestions.slice(0, 40);
};

export default function PracticeScreen({navigation}) {
	const [questions, setQuestions] = useState(() => sortQuestions());
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [hasAnswered, setHasAnswered] = useState(false);

	const delayQuestion = () => setTimeout(() => {
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setHasAnswered(false);
			setCurrentQuestion(nextQuestion)
		} else {
			setShowScore(true);
		}
	}, 3000);

	const handleAnswerOptionPress = (isCorrect) => {
		if (isCorrect) setScore(score + 1);
		setHasAnswered(true);
		return delayQuestion();
	};

	const Timer = () => (
		<View style={{position: 'absolute'}}>
			<CountdownCircleTimer
				isPlaying={!hasAnswered}
				duration={60}
				colors={[
					['#004777', 0.4],
					['#F7B801', 0.4],
					['#A30000', 0.2],
				]}
				size={40}
				trailStrokeWidth={1}
				strokeWidth={1}
				onComplete={() => {
					handleAnswerOptionPress(false)
					return [true, 1]
				}}
			>
				{({ remainingTime }) => (
					<Animated.Text style={{ color: 'white', fontSize: 20 }}>
						{remainingTime}
					</Animated.Text>
				)}
			</CountdownCircleTimer>
		</View>
	);

	return (
		<View style={styles.container}>
			{showScore ? (
				<ScoreComponent navigation={navigation} score={score}/>
			) : (
					<>
						<View>
							<ScrollView>
								<Text>Question {currentQuestion + 1}/{questions.length}</Text>
								<Text style={styles.infoText}>{questions[currentQuestion].questionText}</Text>
								<View style={{ display: 'flex', marginBottom: 20 }}>
									<Timer />
									<Icon name='question-circle-o' size={80} color='white' style={styles.icon} />
								</View>
								{questions[currentQuestion].answerOptions.map( ( answerOption, i ) => (
									<ExamnButton
										key={i}
										wrongAnswer={!answerOption.isCorrect}
										disabled={hasAnswered}
										correctAnswer={answerOption.isCorrect}
										onPress={() => handleAnswerOptionPress( answerOption.isCorrect )}
									>
										{answerOption.answerText}
									</ExamnButton>
								))}
							</ScrollView>
						</View>
					</>
				)}
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
		backgroundColor: 'black',
		flex: 1,
		paddingTop: 10,
		paddingHorizontal: 10,
		paddingBottom: 20,
  },
  infoText: {
    color: 'white',
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center'
	},
	questionText: {
		fontSize: 24,
		color: 'white',
		paddingVertical: 15
	},
	icon: {
		alignSelf: 'center',
	}
});
